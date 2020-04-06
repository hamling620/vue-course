<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <!-- <button @click="handleLogout">退出登录</button> -->
    <Row>
      <i-col></i-col>
    </Row>
    <Row>
      <i-col span="11"></i-col>
      <i-col span="11" :push="2"></i-col>
    </Row>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import { mapActions } from 'vuex'

export default {
  name: 'home',
  components: {
    // HelloWorld
  },
  methods: {
    ...mapActions(['logout']),
    handleLogout () {
      this.logout()
      this.$router.go(0)
      this.$router.push({
        path: '/login'
      })
    }
  },
  beforeRouteEnter (to, from, next) {
    // 在渲染该组件对应的路由被确认时触发，此时组件实例尚未创建，不能访问this
    // 但是可以在next中使用
    next(vm => {
      console.log(vm)
    })
  },
  beforeRouteLeave (to, from, next) {
    // 离开组件对应的路由时触发
    // 用于在离开前，提醒并询问用户是否真的要离开
    // const answer = window.confirm('你真的要离开吗？')
    // if (answer) {
    //   next()
    // } else {
    //   next(false)
    // }
  }
}
</script>

<style lang="less" scoped>
  .home {
    .ivu-row {
      margin-bottom: 20px;
    }
    .ivu-col {
      height: 40px;
      background-color: #f40;
    }
  }
</style>
