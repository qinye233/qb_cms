import { defineStore } from 'pinia'
import { getAllDeps, getAllMenuTree, getAllRole } from '@/service/module/main'

const useMainStore = defineStore('mainStore', {
  state: (): any => ({
    depInfo: {},
    roleInfo: {},
    allMenuTree: []
  }),

  actions: {
    async fetchAllDepAndRole() {
      // 请求对应的数据
      const depInfo = await getAllDeps()
      const roleInfo = await getAllRole()
      const allMenuTree = await getAllMenuTree()
      // 存储到store中
      this.depInfo = depInfo.data
      this.roleInfo = roleInfo.data
      this.allMenuTree = allMenuTree.data
    }
  }
})

export default useMainStore
