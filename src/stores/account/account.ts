import { defineStore } from 'pinia'
import login from '@/service/module/login'
import type { Account } from '@/types'
import { LOGIN_TOKEN } from '@/constants'
import { getMenuTree, getUserInfo } from '@/service/module/main'
import getAllUrls from '../../utils/getAllUrls'
import menuRoute from '@/router/routes'
import router from '@/router'

interface loginState {
  id: number
  name: string
  token: string
  userInfo: any
  menuTree: any
}

const useAccountStore = defineStore('account', {
  state: (): loginState => ({
    id: 0,
    name: '',
    token: '',
    userInfo: {},
    menuTree: {}
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
      const menuTree = await getMenuTree(this.userInfo[0].role_id)
      this.menuTree = menuTree.data

      // 进行本地缓存
      localStorage.setItem('userInfo', JSON.stringify(this.userInfo))
      localStorage.setItem('menuTree', JSON.stringify(this.menuTree))

      // 通过菜单添加路由(动态路由)
      const urls = getAllUrls(this.menuTree)
      menuRoute.forEach((route) => {
        for (const url of urls) {
          if (route.path === url) {
            router.addRoute('main', route)
          }
        }
      })
      return res
    },
    loadLocalCacheAction() {
      // 获取本地信息
      const token = localStorage.getItem(LOGIN_TOKEN)
      const userInfo = JSON.parse(localStorage.getItem('userInfo') as string)
      const menuTree = JSON.parse(localStorage.getItem('menuTree') as string)
      // 判断是否登录
      if (token && userInfo && menuTree) {
        this.token = token
        this.userInfo = userInfo
        this.menuTree = menuTree
        // 动态添加路由
        console.log(token)
        console.log(userInfo)
        console.log(menuTree)
        console.log('动态添加路由成功！')
        const urls = getAllUrls(this.menuTree)
        menuRoute.forEach((route) => {
          for (const url of urls) {
            if (route.path === url) {
              router.addRoute('main', route)
            }
          }
        })
      }
    }
  }
})

export default useAccountStore
