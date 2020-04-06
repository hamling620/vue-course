<template>
  <div>
    <div>hello store</div>
    <div>AppName：{{ appName }}</div>
    <div>AppNameWithVersion：{{ appNameWithVersion }}</div>
    <div>UserName：{{ userName }}</div>
    <div>FirstLetter：{{ firstLetter }}</div>
    <button @click="updateAppName">修改AppName</button>
    <button @click="updateUserName">修改用户名</button>
    <button @click="updateAppNameAsync">异步修改AppName</button>
    <div>{{ version }}</div>
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex'
// import { createNamespacedHelpers } from 'vuex'
// const { mapState } = createNamespacedHelpers('user')

export default {
  computed: {
    // appName () {
    //   return this.$store.state.appName
    // } ,
    // userName () {
    //   return this.$store.state.user.userName
    // }
    // ...mapState([
    //   'appName'
    // ])
    // ...mapState({
    //   appName: state => state.appName,
    //   userName: state => state.user.userName
    // }
    // )
    ...mapState({
      appName: state => state.appName,
      userName: state => state.user.userName,
      version: state => state.version
    }),
    ...mapGetters([
      'appNameWithVersion',
      'firstLetter'
    ])
  },
  methods: {
    ...mapMutations([
      'UPDATE_APPNAME',
      'UPDATE_USERNAME',
      'SET_VERSION'
    ]),
    ...mapActions([
      'UPDATE_SYNC'
    ]),
    updateAppName () {
      this.UPDATE_APPNAME('CMS')
      this.SET_VERSION()
    },
    updateUserName () {
      this.UPDATE_USERNAME({
        userName: 'lucile'
      })
    },
    updateAppNameAsync () {
      this.UPDATE_SYNC()
    }
  }
}
</script>

<style>

</style>
