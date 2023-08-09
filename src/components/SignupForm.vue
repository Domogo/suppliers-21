<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { AUTH_TOKEN, SIGNUP_URL } from '@/utils/constants'
import { useAuth } from '@/composables/auth'

const username = ref('')
const password = ref('')
const firstName = ref('')
const lastName = ref('')
const email = ref('')
const router = useRouter()

const signup = async () => {
  const data = await useAuth<SignupResponse, NewUserData>(SIGNUP_URL, {
    username: username.value,
    password: password.value,
    firstName: firstName.value,
    lastName: lastName.value,
    email: email.value
  })
  if (!data.value?.auth_token) {
    alert('Failed to create a user. Please try again!')
    return
  }

  const token = data.value.auth_token
  localStorage.setItem(AUTH_TOKEN, token)
  router.push('/')
}
</script>

<template>
  <div>
    <h1>Create a user!</h1>
    <form class="signup" @submit.prevent="signup">
      <input type="text" v-model="username" placeholder="username" />
      <input type="password" v-model="password" placeholder="password" />
      <input type="text" v-model="firstName" placeholder="first name" />
      <input type="text" v-model="lastName" placeholder="last name" />
      <input type="email" v-model="email" placeholder="email" />
      <button type="submit">Create user</button>
    </form>
  </div>
</template>

<style scoped>
.signup {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.signup > input {
  width: 100%;
  max-width: 300px;
}

.signup > button {
  max-width: 100px;
}
</style>
