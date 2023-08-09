<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  emits: {
    updateUrl(url: string) {
      return typeof url === 'string'
    }
  },
  props: {
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
  }
})
</script>

<template>
  <div>
    <button v-if="$props.previous" @click.prevent="$emit('updateUrl', $props.previous)">
      Previous
    </button>
    <button v-if="$props.next" @click.prevent="$emit('updateUrl', $props.next)">Next</button>

    <div v-if="$props.count">
      There are {{ $props.count }} <slot name="type">suppliers</slot> total.
    </div>
  </div>
</template>
