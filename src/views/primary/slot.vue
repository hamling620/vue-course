<template>
  <div>
    hello world
    <Layout>
      <template slot="header">我是头部</template>
      <div>小朋友，你是否有很多问号？</div>
      <div>没有</div>
      <template slot="footer">我是底部</template>
    </Layout>
    <hr>
    <scopeSlot :list="todoList">
      <template slot-scope="{todo}">
        <span v-if="todo.isCompeleted">√</span>
        <span v-else>×</span>
      </template>
    </scopeSlot>
  </div>
</template>

<script>
import scopeSlot from './scopeSlot.vue'
export default {
  data () {
    return {
      todoList: [
        { id: 1, name: 'vue-router', isCompeleted: true },
        { id: 2, name: 'vuex', isComeleted: false },
        { id: 3, name: 'prommise', isCompeleted: false }
      ]
    }
  },
  components: {
    scopeSlot,
    Layout: {
      render: function(h) {
        return (
          <div>
            <header>
              { this.$slots.header }
            </header>
            <main>
              { this.$slots.default }
            </main>
            <footer>
              { this.$slots.footer }
            </footer>
          </div>
        )
      }
    }
  }
}
</script>

<style>

</style>
