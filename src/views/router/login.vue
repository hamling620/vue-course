<template>
  <div>
    <label>姓名：<input type="text" v-model="userName"/></label>
    <br>
    <label>密码：<input type="password" v-model="password"/></label>
    <br>
    <button @click="handleSubmit">登录</button>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'Login',
  data () {
    return {
      userName: '',
      password: ''
    }
  },
  methods: {
    ...mapActions(['login']),
    handleSubmit () {
      this.login({
        userName: this.userName,
        password: this.password
      }).then(() => {
        console.log('success')
        this.$router.push('/')
      }).catch(err => {
        console.error(err)
      })
    }
  }
}
</script>

<style>

</style>
