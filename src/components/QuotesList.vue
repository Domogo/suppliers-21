<script setup lang="ts">
import { useFetch } from '@/composables/fetch'
import { QUOTES_URL } from '@/utils/constants'
import { ref } from 'vue'
import CardLink from './shared/CardLink.vue'
import CardComponent from './shared/CardComponent.vue'

const url = ref(QUOTES_URL)

const fetchNext = () => {
  if (!data.value?.next) return
  url.value = data.value.next
}

const fetchPrev = () => {
  if (!data.value?.previous) return
  url.value = data.value.previous
}

const { data, error } = await useFetch<QuotesResponse>(url)
</script>

<template>
  <h1>Quotes:</h1>

  <div v-if="error">{{ error }}</div>

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

  <div>
    <button v-if="data?.previous" @click.prevent="fetchPrev">Previous</button>
    <button v-if="data?.next" @click.prevent="fetchNext">Next</button>
    <div>There are {{ data?.count }} quotes total.</div>
  </div>
</template>
