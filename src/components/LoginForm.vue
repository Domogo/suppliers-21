<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { AUTH_TOKEN, LOGIN_URL } from '@/utils/constants'
import { useAuth } from '@/composables/auth'

const username = ref('')
const password = ref('')
const router = useRouter()

const login = async () => {
  const data = await useAuth<LoginResponse, LoginData>(LOGIN_URL, {
    username: username.value,
    password: password.value
  })

  if (!data.value?.token) {
    alert('Invalid username or password')
    return
  }

  const token = data.value.token
  localStorage.setItem(AUTH_TOKEN, token)
  router.push('/')
}
</script>

<template>
  <div>
    <h1>Log in to see the suppliers!</h1>
    <form class="login" @submit.prevent="login">
      <input type="text" v-model="username" placeholder="username" />
      <input type="password" v-model="password" placeholder="password" />
      <button type="submit">Login</button>
    </form>
  </div>
</template>

<style scoped>
.login {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.login > input {
  width: 100%;
  max-width: 300px;
}

.login > button {
  max-width: 100px;
}
</style>
