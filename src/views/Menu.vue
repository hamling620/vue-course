<template>
  <div>
    <!-- <a-menu>
      <a-menu-item>1-1</a-menu-item>
      <a-menu-item>2-1</a-menu-item>
      <a-submenu>
        <div slot="title">3</div>
        <a-menu-item>3-1</a-menu-item>
        <a-menu-item>3-2</a-menu-item>
        <a-submenu>
          <div slot="title">3.3</div>
          <a-menu-item>3-3-1</a-menu-item>
          <a-menu-item>3-3-2</a-menu-item>
        </a-submenu>
      </a-submenu>
    </a-menu> -->
    <a-menu>
      <template v-for="item in menuList">
        <a-menu-item v-if="!item.children" :key="item.value">{{ item.title }}</a-menu-item>
        <re-submenu v-else :key="item.value" :parent="item"></re-submenu>
      </template>
    </a-menu>
  </div>
</template>

<script>
import MenuComponents from '_c/menu'
import ReSubmenu from './reSubmenu.vue'
const { AMenu, AMenuItem, ASubmenu } = MenuComponents
export default {
  components: {
    AMenu,
    AMenuItem,
    ASubmenu,
    ReSubmenu
  },
  data () {
    return {
      menuList: [
        {
          title: '1-1',
          value: 1
        },
        {
          title: '2-1',
          value: 2
        } ,
        {
          title: '3-1',
          value: 3,
          children: [
            {
              title: '3-1-1',
              value: 4
            },
            {
              title: '3-1-2',
              value: 5
            },
            {
              title: '3-1-3',
              value: 6,
              children: [
                {
                  title: '3-1-3-1',
                  value: 7
                }
              ]
            }
          ]
        }
      ]
    }
  }
}
</script>

<style>

</style>
