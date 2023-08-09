type Supplier = {
  id: number
  name: string
  description: string
}

type SuppliersResponse = {
  count: number
  next: string
  previous: string
  results: Supplier[]
}

type LoginData = {
  username: string
  password: string
}

type LoginResponse = {
  token: string
}

type NewUserData = {
  username: string
  password: string
  firstName: string
  lastName: string
  email: string
}

type SignupResponse = NewUserData & {
  id: string
  auth_token: string
}
