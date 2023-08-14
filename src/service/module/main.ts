import qbRequset from '..'

// 获得用户信息
export function getUserInfo(userId: number) {
  return qbRequset.get({
    url: `/user/${userId}`
  })
}

// 通过角色获取菜单树
export function getMenuTree(roleId: number) {
  return qbRequset.get({
    url: `/role/${roleId}/menu`
  })
}

// 获得全部角色信息
export function getAllRole() {
  return qbRequset.get({
    url: '/role/list'
  })
}
// 获得全部部门信息
export function getAllDeps() {
  return qbRequset.get({
    url: '/department/list'
  })
}

// 获取整个菜单树

export function getAllMenuTree() {
  return qbRequset.get({
    url: '/menu/list'
  })
}
