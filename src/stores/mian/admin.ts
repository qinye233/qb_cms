import { defineStore } from 'pinia'
import type { UserListArg } from '@/types'
import { getUserList, deleteUser, addNewUser, updateUser, getList } from '@/service/module/admin'
import type { UserInfo, UpdateInfo } from '@/types/admin'

const useAdminStore = defineStore('adminStore', {
  state: (): any => ({
    list: [],
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
    },

    async fetchList<listType>(pageName: string, listArg: listType) {
      const list = await getList(pageName, listArg)
      this.list = list.data.data
      this.pageTotal = list.data.pageTotal
    }
  }
})

export default useAdminStore
