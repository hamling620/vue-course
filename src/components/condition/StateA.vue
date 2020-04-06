<template>
  <div>
    hello world
  </div>
</template>

<script>
export default {
  created() {
    console.log('StageA created')
  },
  mounted() {
    console.log('StageA mounted')
  },
  destroyed() {
    console.log('StageA destoryed')
  }
}
</script>

<style>

</style>
