<script setup lang="ts">
import SupplierList from '@/components/SupplierList.vue'
</script>

<template>
  <Suspense>
    <SupplierList />
    <template #fallback>
      <div>No suppliers found</div>
    </template>
  </Suspense>
</template>
