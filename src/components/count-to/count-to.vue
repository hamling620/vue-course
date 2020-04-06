<template>
  <div>
    <slot name="left"></slot>
    <span :id="eleId" ref="countTo" :class="countClass"></span>
    <slot name="right"></slot>
  </div>
</template>

<script>
import { CountUp } from 'countup.js'
export default {
  name: 'count-to',
  data () {
    return {
      counter: {}
    }
  },
  computed: {
    eleId () {
      // 获取组件的_uid
      return `count_up_${this._uid}`
    },
    countClass () {
      return [
        'count-to',
        this.className
      ]
    }
  },
  methods: {
    getCount () {
      return this.$refs.countTo.innerText
    },
    emitEndEvent () {
      setTimeout(() => {
        this.$emit('animate-end', this.getCount())
      }, this.duration * 1000)
    }
  },
  watch: {
    endVal (newVal, oldVal) {
      this.counter.update(newVal)
      this.emitEndEvent()
    }
  },
  props: {
    /**
     * @description 最终值
     */
    endVal: {
      type: Number,
      required: true
    },
    /**
     * @description 动画延迟时间 ms
     */
    delay: {
      type: Number,
      default: 0
    },
    /**
     * @description 起始值
     */
    startVal: {
      type: Number,
      default: 0
    },
    /**
     * @description 保留小数位
     */
    decimalPlaces: {
      type: Number,
      default: 2
    },
    /**
     * @description 小数点
     */
    decimal: {
      type: String,
      default: '.'
    },
    /**
     * @description 动画持续时间
     */
    duration: {
      type: Number,
      default: 2
    },
  },
  mounted () {
    this.counter = new CountUp(this.eleId, this.endVal, {
      startVal: this.startVal,
      decimalPlaces: this.decimalPlaces,
      decimal: this.decimal,
      duration: this.duration
    })
    setTimeout(() => {
      this.counter.start()
      this.emitEndEvent()
    }, this.delay)
  }
}
</script>

<style lang="less">
  @import 'count.less';
</style>
