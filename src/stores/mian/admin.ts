import { defineStore } from 'pinia'
import type { UserListArg } from '@/types'
import { getUserList, deleteUser, addNewUser, updateUser } from '@/service/module/admin'
import type { UserInfo, UpdateInfo } from '@/types/admin'

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
    // 获取用户列表
    async fetchUserList(arg: UserListArg) {
      const userList = await getUserList(arg)
      this.userList = userList.data.data
      this.pageTotal = userList.data.pageTotal
      console.log(userList.data.data)
      console.log(this.userList)
    },
    // 删除用户
    fetchDeleteUser(userId: number) {
      deleteUser(userId)

      // 重新请求数据，做到及时更新页面数据展示
      this.fetchUserList({ size: 10, offset: 1 })
    },
    // 增添用户
    fetchAddNewUser(userInfo: UserInfo) {
      addNewUser(userInfo)

      // 重新请求数据，做到及时更新页面数据展示
      this.fetchUserList({ size: 10, offset: 1 })
    },
    // 编辑用户
    fetchUpdateUser(update: UpdateInfo) {
      updateUser(update)

      // 重新请求数据，做到及时更新页面数据展示
      this.fetchUserList({ size: 10, offset: 1 })
    }
  }
})

export default useAdminStore
