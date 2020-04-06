<template>
  <div class="split-pane-wrapper" ref="outer">
    <div class="pane pane-left" :style="{ width: leftOffsetPercent, paddingRight: `${triggerWidth / 2}px`}">
      <slot name="left"></slot>
    </div>
    <div class="pane pane-trigger" @mousedown="handleMouseDown" :style="{ left: triggerLeft, width: `${triggerWidth}px`}"></div>
    <div class="pane pane-right" :style="{ left: leftOffsetPercent, paddingLeft: `${triggerWidth / 2}px`}">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SplitPane',
  data () {
    return {
      canMove: false,
      initOffset: 0
    }
  },
  props: {
    value: {
      type: Number,
      default: .3
    },
    triggerWidth: {
      type: Number,
      default: 8
    },
    min: {
      type: Number,
      default: .1
    },
    max: {
      type: Number,
      default: .9
    }
  },
  computed: {
    leftOffsetPercent () {
      return `${this.value * 100}%`
    },
    triggerLeft () {
      return `calc(${this.value * 100}% - ${this.triggerWidth / 2}px)`
    }
  },
  methods: {
    handleMouseDown (e) {
      document.addEventListener('mousemove', this.handleMouseMove)
      document.addEventListener('mouseup', this.handleMouseUp)
      this.initOffset = e.pageX - e.srcElement.getBoundingClientRect().left
      this.canMove = true
    },
    handleMouseMove (e) {
      if (!this.canMove) return
      const outerRect = this.$refs.outer.getBoundingClientRect()
      let offsetPercent = (e.pageX - this.initOffset + this.triggerWidth / 2) / outerRect.width
      if (offsetPercent < this.min) offsetPercent = this.min
      if (offsetPercent > this.max) offsetPercent = this.max
      this.$emit('update:value', offsetPercent)
    },
    handleMouseUp () {
      this.canMove = false
    }
  }
}
</script>

<style lang="less">
  .split-pane-wrapper {
    width: 300px;
    height: 150px;
    background-color: beige;
    position: relative;
    .pane {
      position: absolute;
      top: 0;
      height: 100%;
      &-left {
        background-color: #2ab561;
      }
      &-right {
        background-color: #f40;
        right: 0;
      }
      &-trigger {
        background-color: #ccc;
        height: 100%;
        z-index: 1;
        user-select: none;
        cursor: col-resize;
      }
    }
  }
</style>
