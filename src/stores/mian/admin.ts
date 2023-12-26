import { defineStore } from 'pinia'
import type { UserListArg } from '@/types'
import {
  getUserList,
  deleteUser,
  addNewUser,
  updateUser,
  getList,
  deleteData,
  updateData,
  addNewData
} from '@/service/module/admin'
import maskEmail from '@/utils/maskEmail'
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

      for(const user of this.userList) {
        user.email = maskEmail(user.email)
      }
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

    // 重写更加通用的方法

    async fetchList<listType>(pageName: string, listArg: listType) {
      const list = await getList(pageName, listArg)
      this.list = list.data.data
      this.pageTotal = list.data.pageTotal
    },
    // 删除用户
    fetchDeleteData(pageName: string, id: number) {
      deleteData(pageName, id)

      // 重新请求数据，做到及时更新页面数据展示
      this.fetchList(pageName, { size: 10, offset: 1 })
    },
    // 增添用户
    fetchAddNewData<NewInfo>(pageName: string, add: NewInfo) {
      addNewData(pageName, add)

      // 重新请求数据，做到及时更新页面数据展示
      this.fetchList(pageName, { size: 10, offset: 1 })
    },
    // 编辑用户
    fetchUpdateData<UpdateInfo>(pageName: string, update: UpdateInfo) {
      updateData(pageName, update)

      // 重新请求数据，做到及时更新页面数据展示
      this.fetchList(pageName, { size: 10, offset: 1 })
    }
  }
})

export default useAdminStore
