import axios from 'axios'

const api = axios.create({
  baseURL: `https://605d074f9386d200171ba209.mockapi.io/api/v1/restaurants`,
  timeout: 10000
})

export type Restaurant = {
  id: string
  name: string
  image: string
  logo: string
  description: string
  telephone: string
  price_range: string
  payment_methods: string
  opening_hours: string
}

export const fetchRestaurants = async (
  page = 1,
  limit = 10
): Promise<Restaurant[]> => {
  const restaurants = await api.get(`/?page=${page}&limit=${limit}`)
  return restaurants.data.data
}
