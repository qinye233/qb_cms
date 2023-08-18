import { getGoodsAmount, getGoodsCategoryCount, getGoodsCity } from '@/service/module/overview'
import { defineStore } from 'pinia'

const useOverviewStore = defineStore('overview', {
  state: () => ({
    overviewAmount: [],
    overviewCategoryCount: [],
    overviewCitySale: []
  }),
  actions: {
    async fetchOverviewData() {
      const goodsAmount = await getGoodsAmount()
      const categoryCount = await getGoodsCategoryCount()
      const citySale = await getGoodsCity()
      this.overviewAmount = goodsAmount.data
      this.overviewCategoryCount = categoryCount.data
      this.overviewCitySale = citySale.data
    }
  }
})

export default useOverviewStore
