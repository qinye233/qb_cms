import qbRequset from '..'

export function getUserInfo(userId: number) {
  return qbRequset.get({
    url: `/user/${userId}`
  })
}

export function getMenuTree(roleId: number) {
  return qbRequset.get({
    url: `/role/${roleId}/menu`
  })
}
