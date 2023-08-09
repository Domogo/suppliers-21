<script setup lang="ts">
import { RouterLink } from 'vue-router'

const props = defineProps({
  supplierId: {
    type: Number,
    required: false
  }
})
</script>

<template>
  <RouterLink :to="`/suppliers/${props.supplierId}`">
    <div>
      <slot name="title"></slot>
      <slot></slot>
    </div>
  </RouterLink>
</template>
