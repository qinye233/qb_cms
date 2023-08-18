import { getGoodsAmount } from '@/service/module/overview'
import { defineStore } from 'pinia'

const useOverviewStore = defineStore('overview', {
  state: () => ({
    overviewAmount: []
  }),
  actions: {
    async fetchOverviewData() {
      const goodsAmount = await getGoodsAmount()
      this.overviewAmount = goodsAmount.data
    }
  }
})

export default useOverviewStore
