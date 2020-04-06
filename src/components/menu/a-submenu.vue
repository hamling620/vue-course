<template>
  <ul class="a-submenu">
    <div class="a-submenu-title">
      <slot name="title"></slot>
      <div class="a-submenu-shrink-icon" @click="showChild" :style="{transform: `rotateZ(${isShowChild ? 90 : 0}deg)`}">
        <span>></span>
      </div>
    </div>
    <div v-show="isShowChild" class="a-submenu-item">
      <slot></slot>
    </div>
  </ul>
</template>

<script>
export default {
  name: 'ASubmenu',
  data () {
    return {
      isShowChild: false
    }
  },
  methods: {
    showChild () {
      this.isShowChild = !this.isShowChild
    }
  }
}
</script>

<style lang="less">
  .a-submenu {
    list-style: none;
    padding: 0;
    margin: 0;
    &-title {
      background-color: #f40;
      color: #fff;
      position: relative;
    }
    &-shrink-icon {
      position: absolute;
      right: 4px;
      top: 2px;
      cursor: pointer;
    }
    &-item {
      padding-left: 20px;
    }
  }
</style>
