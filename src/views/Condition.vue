<template>
  <div>
    <template v-if="isShow">
      <StateA/>
    </template>
    <template v-else>
      <StateB/>
    </template>
    <div>
      <button @click="handleChange">切换状态</button>
    </div>
    <StateC v-show="isShow"/>
    <template v-if="loginType">
      <label>Username</label>
      <input type="text" placeholder="请输入用户名" key="username">
    </template>
    <template v-else>
      <label>Email</label>
      <input type="text" placeholder="请输入邮箱" key="email">
    </template>
    <button @click="loginType=!loginType">切换登录类型</button>
  </div>
</template>

<script>
import { StateA, StateB, StateC } from '_c/condition'
export default {
  components: {
    StateA,
    StateB,
    StateC
  },
  data() {
    return {
      isShow: false,
      loginType: true
    }
  },
  methods: {
    handleChange () {
      this.isShow = !this.isShow
    }
  }
}
</script>

<style>

</style>
