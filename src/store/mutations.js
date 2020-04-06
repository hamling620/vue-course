import Vue from 'vue'
export default {
  UPDATE_APPNAME: (state, params) => {
    state.appName = params
  },
  SET_VERSION: (state) => {
    Vue.set(state, 'version', '2.0')
  }
}
