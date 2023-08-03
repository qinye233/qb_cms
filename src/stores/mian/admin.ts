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
      console.log('成功获取用户列表')
      this.userList = userList.data.data
      this.pageTotal = userList.data.pageTotal
      console.log(this.userList)
    },
    // 删除用户
    async fetchDeleteUser(userId: number) {
      const deleteResult = await deleteUser(userId)
      console.log(deleteResult)

      // 重新请求数据，做到及时更新页面数据展示
      this.fetchUserList({ size: 10, offset: 1 })
    },
    // 增添用户
    async fetchAddNewUser(userInfo: UserInfo) {
      const addResult = addNewUser(userInfo)
      console.log(addResult)

      // 重新请求数据，做到及时更新页面数据展示
      this.fetchUserList({ size: 10, offset: 1 })
    },
    // 编辑用户
    async fetchUpdateUser(update: UpdateInfo) {
      const updateResult = updateUser(update)
      console.log(updateResult)

      // 重新请求数据，做到及时更新页面数据展示
      this.fetchUserList({ size: 10, offset: 1 })
    }
  }
})

export default useAdminStore
