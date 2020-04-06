import { login, authorization } from '@/api/user'
import { setToken } from '@/lib/utils'
const state = {
  userName: 'hamling'
}
const getters = {
  firstLetter: state => {
    return state.userName.substr(0, 1)
  }
}
const mutations = {
  UPDATE_USERNAME: (state, params) => {
    state.userName = params.userName
  }
}
const actions = {
  login ({ commit }, { userName, password }) {
    return new Promise((resolve, reject) => {
      login({ userName, password }).then((res) => {
        if (res.code === 200 && res.data.token) {
          setToken(res.data.token)
          resolve()
        }else {
          reject(new Error('token error'))
        }
      }).catch(err => {
        reject(err)
      })
    })
  },
  authorization ({ commit }) {
    return new Promise((resolve, reject) => {
      authorization().then((res) => {
        if (res.code === 401) {
          reject(new Error('token error'))
        } else {
          resolve()
        }
      }).catch(err => {
        reject(err)
      })
    })
  },
  logout () {
    setToken('')
  }
}
export default {
  // namespaced: true,
  state,
  getters,
  mutations,
  actions
}
