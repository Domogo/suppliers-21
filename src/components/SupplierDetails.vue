<script setup lang="ts">
import { useFetch } from '@/composables/fetch'
import { SUPPLIERS_URL } from '@/utils/constants'
import { toRefs } from 'vue'

const props = defineProps({
  supplierId: {
    type: String,
    required: true
  }
})

const { supplierId } = toRefs(props)
const { data, error } = await useFetch<Supplier>(`${SUPPLIERS_URL}${supplierId.value}/`)
</script>

<template>
  <div v-if="error">{{ error }}</div>

  <h1>Supplier: {{ data?.name }}</h1>
  <p>{{ data?.description }}</p>
</template>
