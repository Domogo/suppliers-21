import { AUTH_TOKEN } from '@/utils/constants'
import axios from 'axios'
import { ref, watchEffect, toValue, type Ref } from 'vue'

export const useFetch = async <T>(url: string | Ref<string>) => {
  const data = ref<T>()
  const error = ref<string>()

  const authToken = localStorage.getItem(AUTH_TOKEN)

  if (!authToken) {
    error.value = 'No auth token found'
    return { data, error }
  }

  watchEffect(async () => {
    data.value = undefined
    error.value = undefined

    const urlValue = toValue(url)

    const response = await axios
      .get<T>(urlValue, {
        headers: {
          Authorization: `Token ${authToken}`
        }
      })
      .catch((err) => {
        console.log(err.message)
        error.value = err.message
      })

    data.value = response?.data
  })

  return { data, error }
}