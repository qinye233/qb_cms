import { defineStore } from 'pinia'
import login from '@/service/module/login'
import type { Account } from '@/types'
import { LOGIN_TOKEN } from '@/constants'
import { getMenuTree, getUserInfo } from '@/service/module/main'

interface loginState {
  id: number
  name: string
  token: string
  userInfo: any
}

const useAccountStore = defineStore('account', {
  state: (): loginState => ({
    id: 0,
    name: '',
    token: localStorage.getItem(LOGIN_TOKEN) || '',
    userInfo: {}
  }),
  actions: {
    async loginActionRequest(account: Account) {
      // 帐号登录，获取token等信息
      const res = await login(account)

      this.id = res.data?.id
      this.name = res.data?.name
      this.token = res.data?.token

      // 进行本地储存
      localStorage.setItem(LOGIN_TOKEN, this.token)

      //获取用户的角色
      const userInfo = await getUserInfo(this.id)
      this.userInfo = userInfo.data
      // 获取角色对应菜单
      const menuTree = await getMenuTree(this.userInfo.role_id)
      // 通过菜单添加路由

      return res
    }
  }
})

export default useAccountStore
