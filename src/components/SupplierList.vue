<script setup lang="ts">
import { useFetch } from '@/composables/fetch'
import { SUPPLIERS_URL } from '@/utils/constants'
import { ref } from 'vue'
import CardLink from './shared/CardLink.vue'
import PaginationControls from './shared/PaginationControls.vue'

const url = ref(SUPPLIERS_URL)

const { data, error } = await useFetch<SuppliersResponse>(url)
</script>

<template>
  <div v-if="error">{{ error }}</div>
  <div v-if="data">
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

    <PaginationControls
      :url="url"
      :previous="data?.previous"
      :next="data?.next"
      :count="data?.count"
      @update-url="(newUrl) => (url = newUrl)"
    />
  </div>
  <div v-else>Loading...</div>
</template>
