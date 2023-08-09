import axios from 'axios'
import { ref } from 'vue'

export const useAuth = async <ResponseType, PayloadType>(url: string, payload: PayloadType) => {
  const data = ref<ResponseType>()

  const response = await axios.post<ResponseType>(url, payload).catch((err) => {
    console.log(err.message)
    data.value = undefined
  })

  data.value = response?.data

  return data
}
