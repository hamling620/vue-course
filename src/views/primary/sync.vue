<template>
  <div class="sync" :show="show">
    hello world
    <button @click="onClose">关闭</button>
  </div>
</template>

<script>
// 有些情况下，我们需要对prop进行双向数据绑定，不幸的是，真正的双向数据绑定会带来维护上的问题。因为子组件可以修改父组件，且在父组件和子组件都没有明显的改动来源。
// 这也是为什么我们推荐以update:myPropName的模式触发事件而取代

export default {
  props: ['show'],
  methods: {
    onClose () {
      this.$emit('update:show', false)
    }
  }
}
</script>

<style>
  .sync {
    width: 200px;
    height: 200px;
    background-color: #2ab561;
    color: #fff;
  }
</style>
