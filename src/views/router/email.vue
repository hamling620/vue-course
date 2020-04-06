<template>
  <div class="email">
    This is Email
    <br>
    {{ food }}
    <div>{{ message }}</div>
  </div>
</template>

<script>
export default {
  props: {
    food: {
      type: String,
      default: 'apple'
    }
  },
  data () {
    return {
      message: 'hello'
    }
  },
  mounted () {
    this.$bus.$on('go-click', msg => {
      this.message = msg
    })
  }
}
</script>

<style scoped>
  .email {
    border: 1px solid #2ab561;
  }
</style>
