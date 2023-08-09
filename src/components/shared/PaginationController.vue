<script setup lang="ts">
import { urlStore } from '@/stores/urlStore'

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
    <button v-if="props.previous" @click.prevent="urlStore.url = props.previous">Previous</button>
    <button v-if="props.next" @click.prevent="urlStore.url = props.next">Next</button>

    <div v-if="props.count">
      There are {{ props.count }} <slot name="type">suppliers</slot> total.
    </div>
  </div>
</template>
@/stores/urlStore
