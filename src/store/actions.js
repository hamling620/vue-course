import { updateAppName } from '../api/store'
export default {
  async UPDATE_SYNC (context) {
    try {
      const { info: { appName } } = await updateAppName()
      context.commit('UPDATE_APPNAME', appName)
    } catch (err) {
      console.error(err)
    }
  }
}
