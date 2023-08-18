import axios from 'axios'

export function getGoodsAmount() {
  return axios.get('/goods/amount/list')
}
