<script setup lang="ts">
const props = defineProps({
  url: {
    type: String,
    required: true
  },
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

const emit = defineEmits({
  updateUrl: (url: string) => typeof url === 'string'
})
</script>

<template>
  <div>
    <button v-if="props.previous" @click.prevent="emit('updateUrl', props.previous)">
      Previous
    </button>
    <button v-if="props.next" @click.prevent="emit('updateUrl', props.next)">Next</button>

    <div v-if="props.count">
      There are {{ props.count }} <slot name="type">suppliers</slot> total.
    </div>
  </div>
</template>
