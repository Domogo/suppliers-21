<script setup lang="ts">
import { useFetch } from '@/composables/fetch'
import { QUOTES_URL } from '@/utils/constants'
import { ref } from 'vue'
import CardLink from './shared/CardLink.vue'
import CardComponent from './shared/CardComponent.vue'

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

    <div>
      <button v-if="data?.previous" @click.prevent="url = data?.previous">Previous</button>
      <button v-if="data?.next" @click.prevent="url = data?.next">Next</button>

      <div>There are {{ data?.count }} quotes total.</div>
    </div>
  </div>
  <div v-else>Loading...</div>
</template>
