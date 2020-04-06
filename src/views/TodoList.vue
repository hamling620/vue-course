<template>
  <div>
    <Input @addItem="addTodo"/>
    <List @deleteItem="deleteTodo" :list="listData"/>
  </div>
</template>

<script>
import Input from '_c/todoList/Input.vue'
import List from '_c/todoList/List.vue'
export default {
  components: {
    Input,
    List
  },
  data() {
    return {
      listData: []
    }
  },
  methods: {
    addTodo(value) {
      this.listData.push(value)
      console.log(this.list)
    },
    deleteTodo(index) {
      this.listData.splice(index, 1)
    }
  },
  created() {
    console.log('todo created')
  },
   mounted() {
    console.log('todo mounted')
  },
  updated() {
    console.log('todo updated')
  },
  destoryed() {
    console.log('todo destoryed')
  }
}
</script>

<style lang="less" scoped>

</style>
