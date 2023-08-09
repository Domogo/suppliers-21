<script setup lang="ts">
import LoginForm from '@/components/LoginForm.vue'
import SignupForm from '@/components/SignupForm.vue'
import { type Ref, ref } from 'vue'

type FormType = 'login' | 'signup'

const selectedForm: Ref<FormType> = ref('login')

const toggleForm = () => {
  selectedForm.value = selectedForm.value === 'login' ? 'signup' : 'login'
}
</script>

<template>
  <div>Log in or create a user!</div>

  <component :is="selectedForm === 'login' ? LoginForm : SignupForm" />

  <div>
    <p v-if="selectedForm === 'login'">Don't have a user yet?</p>
    <p v-else>Already have a user?</p>
    <button @click="toggleForm">
      {{ selectedForm === 'login' ? 'Create a user' : 'Go to login page' }}
    </button>
  </div>
</template>
