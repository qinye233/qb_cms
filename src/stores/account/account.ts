import { defineStore } from 'pinia'
import login from '@/service/module/login'
import type { Account } from '@/types'
import { LOGIN_TOKEN } from '@/constants'

const useAccountStore = defineStore('account', {
  state: () => ({
    id: '',
    name: '',
    token: localStorage.getItem(LOGIN_TOKEN) || ''
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

      return res
    }
  }
})

export default useAccountStore
