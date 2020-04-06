<template>
  <a-submenu>
    <div slot="title">{{ parent.title }}</div>
    <template v-for="item in parent.children">
      <a-menu-item v-if="!item.children" :key="item.value">{{ item.title }}</a-menu-item>
      <re-submenu v-else :key="item.value" :parent="item"></re-submenu>
    </template>
  </a-submenu>
</template>

<script>
import MenuComponents from '_c/menu'
const { ASubmenu, AMenuItem } = MenuComponents
export default {
  name: 'ReSubmenu',
  components: {
    ASubmenu,
    AMenuItem
  },
  props: {
    parent: {
      type: Object,
      default: () => ({})
    }
  }
}
</script>

<style>

</style>
