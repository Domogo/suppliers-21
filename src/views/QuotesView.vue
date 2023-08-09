<script setup lang="ts">
import QuotesList from '@/components/QuotesList.vue'
</script>

<template>
  <Suspense>
    <QuotesList />
    <template #fallback>
      <div>No quotes found</div>
    </template>
  </Suspense>
</template>
