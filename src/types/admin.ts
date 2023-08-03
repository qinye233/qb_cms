export interface UserListArg {
  size: number
  offset: number
}

export interface UserInfo {
  username: string
  real_name: string
  password: string
  email: string
  role_id: string
  dep_id: string
}

export interface UpdateInfo {
  userId: number
  modifyArg: ModifyArg
}

export interface ModifyArg {
  NAME: string
  email: string
  real_name: string
  role_id: string
  dep_id: string
}
