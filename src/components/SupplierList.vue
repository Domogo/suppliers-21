<script setup lang="ts">
import { useFetch } from '@/composables/fetch'
import { SUPPLIERS_URL } from '@/utils/constants'
import { ref } from 'vue'
import CardLink from './shared/CardLink.vue'

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
  <div v-if="error">{{ error }}</div>
  <template v-else>
    <h1>Suppliers:</h1>
    <div class="container">
      <CardLink
        :supplier-id="supplier.id"
        class="card"
        v-for="supplier in data?.results"
        :key="supplier.id"
      >
        <template #title>
          <h2>{{ supplier.name }}</h2>
        </template>
        <p>{{ supplier.description }}</p>
      </CardLink>
    </div>

    <div>
      <button v-if="data?.previous" @click.prevent="fetchPrev">Previous</button>
      <button v-if="data?.next" @click.prevent="fetchNext">Next</button>
      <div v-if="data">There are {{ data?.count }} suppliers total.</div>
    </div>
  </template>
</template>
