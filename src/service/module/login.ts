import type { Account } from '@/types'
import qbRequset from '..'

export default function login(account: Account) {
  return qbRequset.post({
    url: '/login',
    data: account
  })
}
