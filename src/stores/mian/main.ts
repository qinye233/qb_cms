import { defineStore } from 'pinia'
import { getAllDeps, getAllRole } from '@/service/module/main'

const useMainStore = defineStore('mainStore', {
  state: (): any => ({
    depInfo: {},
    roleInfo: {}
  }),

  actions: {
    async fetchAllDepAndRole() {
      // 请求对应的数据
      const depInfo = await getAllDeps()
      const roleInfo = await getAllRole()
      // 存储到store中
      this.depInfo = depInfo.data
      this.roleInfo = roleInfo.data
    }
  }
})

export default useMainStore
