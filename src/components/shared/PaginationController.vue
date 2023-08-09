<script setup lang="ts">
import { paginationStore } from '@/stores/paginationStore'

const props = defineProps({
  previous: {
    type: String,
    required: false
  },
  next: {
    type: String,
    required: false
  },
  count: {
    type: Number,
    required: false
  }
})
</script>

<template>
  <div>
    <button v-if="props.previous" @click.prevent="paginationStore.url = props.previous">
      Previous
    </button>
    <button v-if="props.next" @click.prevent="paginationStore.url = props.next">Next</button>

    <div v-if="props.count">
      There are {{ props.count }} <slot name="type">suppliers</slot> total.
    </div>
  </div>
</template>
