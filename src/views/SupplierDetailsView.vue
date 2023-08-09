<script setup lang="ts">
import { useRoute } from 'vue-router'
import SupplierDetails from '@/components/SupplierDetails.vue'

const route = useRoute()
const supplierId = route.params.id as string
</script>

<template>
  <Suspense>
    <SupplierDetails :supplierId="supplierId" />
    <template #fallback>
      <div>No supplier found</div>
    </template>
  </Suspense>
</template>
