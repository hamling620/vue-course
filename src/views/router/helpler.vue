<template>
  <div class="helper">
    Preview
    <button @click="handleClick">点击</button>
  </div>
</template>

<script>
export default {
  methods: {
    handleClick () {
      this.$bus.$emit('go-click', 'hello world')
    }
  }
}
</script>

<style scoped>
  .helper {
    border: 1px solid #f40;
  }
</style>
