<template>
  <div>
    <ul>
      <li v-for="(item, index) in list" :key="`${item}_${index}`">
        {{ item}} <button @click="handleDelete(index)">删除</button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    list: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    handleDelete(index) {
      this.$emit('deleteItem', index)
    }
  },
  created() {
    console.log('list created')
  },
  mounted() {
    console.log('list mounted')
  },
  updated() {
    console.log('list updated')
  },
  destoryed() {
    console.log('list destoryed')
  }
}
</script>

<style lang="less" scoped>

</style>
