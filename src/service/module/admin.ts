import type { UserInfo, UpdateInfo } from '@/types/admin'
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

// 编辑用户
export function updateUser(update: UpdateInfo) {
  return qbRequset.patch({
    url: '/user',
    data: update
  })
}

// 重写通用的方法
// 获取数据列表
export function getList<listType>(pageName: string, listArg: listType) {
  return qbRequset.post({
    url: `/${pageName}/list`,
    data: listArg
  })
}
// 删除用户方法
export function deleteData(pageName: string, id: number) {
  return qbRequset.delete({
    url: `/${pageName}`,
    data: {
      id
    }
  })
}

// 添加新用户
export function addNewData<NewInfo>(pageName: string, add: NewInfo) {
  return qbRequset.post({
    url: `/${pageName}`,
    data: add
  })
}

// 编辑用户
export function updateData<UpdateInfo>(pageName: string, update: UpdateInfo) {
  return qbRequset.patch({
    url: `/${pageName}`,
    data: update
  })
}
