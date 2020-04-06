<template>
  <div>
    <ul>
      <li v-for="item in list" :key="item.id">
        <span>{{ item.name }}</span>
        <span>{{ item.id }}</span>
        <slot :todo="item"></slot>
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
  }
}
</script>

<style scoped>
  span {
    display: inline-block;
    width: 75px;
  }
</style>
