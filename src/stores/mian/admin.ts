import { defineStore } from 'pinia'
import type { UserListArg } from '@/types'
import { getUserList } from '@/service/module/admin'

interface userList {
  userList: Daum[]
  pageTotal: number
}

interface Daum {
  id: number
  NAME: string
  real_name: string
  PASSWORD: string
  enable: number
  email: string
  dep_id: number
  role_id: number
  create_at: string
  update_at: string
}

const useAdminStore = defineStore('adminStore', {
  state: (): userList => ({
    userList: [],
    pageTotal: 0
  }),
  actions: {
    async fetchUserList(arg: UserListArg) {
      const userList = await getUserList(arg)
      this.userList = userList.data.data
      this.pageTotal = userList.data.pageTotal
    }
  }
})

export default useAdminStore
