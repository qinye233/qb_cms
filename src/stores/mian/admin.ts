import { defineStore } from 'pinia'
import type { UserListArg } from '@/types'
import { getUserList, deleteUser } from '@/service/module/admin'

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
    },
    async fetchDeleteUser(userId: number) {
      const deleteResult = await deleteUser(userId)
      console.log(deleteResult.data)

      // 重新请求数据，做到及时更新页面数据展示
      this.fetchUserList({  size: 10, offset: 1  })
    }
  }
})

export default useAdminStore
