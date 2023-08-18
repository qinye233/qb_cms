import axios from 'axios'

export function getGoodsAmount() {
  return axios.get('/goods/amount/list')
}

export function getGoodsCategoryCount() {
  return axios.get('/goods/category/count')
}

export function getGoodsCity() {
  return axios.get('/goods/city/sale')
}
