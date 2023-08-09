<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { LOCAL_STORAGE_TOKEN, LOGIN_URL } from '@/utils/constants'
import axios from 'axios'

const username = ref('')
const password = ref('')
const router = useRouter()

type LoginData = {
  username: string
  password: string
}
type LoginResponse = {
  token: string
}
const fetchUserData = async (data: LoginData) => {
  const response = await axios.post<LoginResponse>(LOGIN_URL, data).catch((err) => {
    console.error(err)
    return undefined
  })

  return response?.data.token
}

const login = async () => {
  const token = await fetchUserData({ username: username.value, password: password.value })

  if (!token) {
    alert('Invalid username or password')
    return
  }

  localStorage.setItem(LOCAL_STORAGE_TOKEN, token)
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
