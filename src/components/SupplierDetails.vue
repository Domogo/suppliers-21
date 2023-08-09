<script setup lang="ts">
import { useFetch } from '@/composables/fetch'
import { urlStore } from '@/stores/urlStore'
import { SUPPLIERS_URL } from '@/utils/constants'
import { toRefs } from 'vue'

const props = defineProps({
  supplierId: {
    type: String,
    required: true
  }
})

const { supplierId } = toRefs(props)
urlStore.url = SUPPLIERS_URL + supplierId.value + '/'

const { data, error } = await useFetch<Supplier>()
</script>

<template>
  <div v-if="error">{{ error }}</div>
  <div v-if="data">
    <h1>Supplier: {{ data?.name }}</h1>
    <p>{{ data?.description }}</p>
  </div>
  <div v-else>Loading...</div>
</template>
@/stores/urlStore
