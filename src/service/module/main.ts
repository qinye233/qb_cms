import qbRequset from '..'

// 获得用户信息
export function getUserInfo(userId: number) {
  return qbRequset.get({
    url: `/user/${userId}`
  })
}

// 获得菜单树
export function getMenuTree(roleId: number) {
  return qbRequset.get({
    url: `/role/${roleId}/menu`
  })
}

export function getAllRole() {
  return qbRequset.get({
    url: 'role/list'
  })
}

export function getAllDeps() {
  return qbRequset.get({
    url: 'dep/list'
  })
}
