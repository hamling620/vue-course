<template>
  <div>
    <!-- 动态路由 -->
    动态路由演示
    <!-- {{ $route.params.name }}
    <br>
    {{ $route.params.id }} -->
    {{ name }}
  </div>
</template>

<script>
export default {
  watch: {
    '$route' (to, from) {
      console.log(to.params)
    }
  },
  props: {
    name: [String, Number],
    default: ''
  },
  // 路由参数发生变化时触发
  beforeRouteUpdate (to, from, next) {
    console.log('to：', to.params)
    console.log('from：', from.params)
    next()
  }
}
</script>

<style>

</style>
