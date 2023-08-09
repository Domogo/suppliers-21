<script setup lang="ts">
import { useFetch } from '@/composables/fetch'
import { SUPPLIERS_URL } from '@/utils/constants'
import { ref } from 'vue'

const url = ref(SUPPLIERS_URL)

const fetchNext = () => {
  if (!data.value?.next) return
  url.value = data.value.next
}

const fetchPrev = () => {
  if (!data.value?.previous) return
  url.value = data.value.previous
}

const { data, error } = await useFetch<SuppliersResponse>(url)
</script>

<template>
  <div>Suppliers:</div>

  <div v-if="error">{{ error }}</div>

  <div>{{ data?.count }}</div>
  <div>
    <ul>
      <li v-for="supplier in data?.results" :key="supplier.id">
        {{ supplier.name }}
      </li>
    </ul>
  </div>

  <div>
    <button v-if="data?.previous" @click.prevent="fetchPrev">Previous</button>
    <button v-if="data?.next" @click.prevent="fetchNext">Next</button>
  </div>
</template>
