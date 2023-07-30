import qbRequset from '..'

import type { UserListArg } from '@/types'

export function getUserList(userList: UserListArg) {
  return qbRequset.post({
    url: '/user/list',
    data: userList
  })
}
