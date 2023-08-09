<template>
  <div class="login">
    <h1>This is the signup page</h1>
    <form @submit.prevent="signup">
      <input type="text" v-model="username" placeholder="username" />
      <input type="password" v-model="password" placeholder="password" />
      <button type="submit">Create user</button>
    </form>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const username = ref('')
const password = ref('')
const router = useRouter()

const signup = () => {
  if (username.value === 'admin' && password.value === 'password') {
    router.push('/home')
  } else {
    alert('Invalid username or password')
  }
}
</script>
