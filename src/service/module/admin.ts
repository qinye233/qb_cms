import type { UserInfo } from '@/types/admin'
import qbRequset from '..'

import type { UserListArg } from '@/types'

// 获取用户列表方法
export function getUserList(userList: UserListArg) {
  return qbRequset.post({
    url: '/user/list',
    data: userList
  })
}

// 删除用户方法
export function deleteUser(userId: number) {
  return qbRequset.delete({
    url: '/user',
    data: {
      userId
    }
  })
}

// 添加新用户
export function addNewUser(userInfo: UserInfo) {
  return qbRequset.post({
    url: '/user',
    data: userInfo
  })
}
