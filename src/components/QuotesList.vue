<script setup lang="ts">
import { useFetch } from '@/composables/fetch'
import { QUOTES_URL } from '@/utils/constants'
import { ref } from 'vue'
import CardLink from './shared/CardLink.vue'
import CardComponent from './shared/CardComponent.vue'
import PaginationControls from './shared/PaginationControls.vue'

const url = ref(QUOTES_URL)

const { data, error } = await useFetch<QuotesResponse>(url)
</script>

<template>
  <div v-if="error">{{ error }}</div>

  <div v-if="data">
    <h1>Quotes:</h1>

    <div class="container">
      <component
        :is="quote.supplier_id ? CardLink : CardComponent"
        :supplier-id="quote.supplier_id"
        class="card"
        v-for="quote in data?.results"
        :key="quote.id"
      >
        <template #title>
          <h2>
            {{ quote.title }}
          </h2>
        </template>
        <p>Amount: {{ quote.amount }}</p>
        <p>Created: {{ quote.created }}</p>
        <p v-if="quote.supplier_id">Supplier id: {{ quote.supplier_id }}</p>
      </component>
    </div>

    <PaginationControls
      :url="url"
      :previous="data?.previous"
      :next="data?.next"
      :count="data?.count"
      @update-url="(newUrl) => (url = newUrl)"
    >
      <template #type> quotes </template>
    </PaginationControls>
  </div>
  <div v-else>Loading...</div>
</template>
