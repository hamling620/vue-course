import Cookies from 'js-cookie'

export const setToken = (token, tokenName='token') => {
  Cookies.set(tokenName, token)
}

export const getToken = (tokenName='token') => {
  return Cookies.get(tokenName)
}

// export const removeToken = (tokenName = 'token') => {
//   Cookies.remove(tokenName)
// }
