type Supplier = {
  id: number
  name: string
  description: string
}

type Quote = {
  id: number
  amount: string
  created: string
  title: string
  supplier_id?: number
}

type PagedResult = {
  count: number
  next: string
  previous: string
}

type SuppliersResponse = PagedResult & {
  results: Supplier[]
}

type QuotesResponse = PagedResult & {
  results: Quote[]
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
