<template>
  <ul>
    <li v-for="item in list" :key="item.id">
      <span v-if="!render">{{ item.name }}</span>
      <render-dom v-else :render-func="render" :name="item.name" :url="item.url"></render-dom>
    </li>
  </ul>
</template>

<script>
import RenderDom from './render-dom'
export default {
  name: 'List',
  components: {
    RenderDom
  },
  props: {
    list: {
      type: Array,
      default: () => []
    },
    render: {
      type: Function,
      default: () => {}
    }
  }
}
</script>

<style>

</style>
