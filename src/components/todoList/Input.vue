<template>
  <div>
    <input type="text" v-model="inputValue"/>
    <button @click="handleAddItem">添加事项</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      inputValue: ''
    }
  },
  methods: {
    handleAddItem() {
      if (!this.inputValue) return
      this.$emit('addItem', this.inputValue)
      this.inputValue = ''
    }
  }
}
</script>

<style lang="less" scoped>

</style>
