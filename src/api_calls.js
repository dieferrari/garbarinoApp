import axios from 'axios';

// request for all products in the seed
export const getProducts = () => {
  return axios.get('/api/products')
}

