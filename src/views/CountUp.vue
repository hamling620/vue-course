<template>
  <div>
    <countTo :endVal="endVal" :delay="delay" ref="countUp" @animate-end="handleEnd">
      <span slot="left">总金额：</span>
      <span slot="right">元</span>
    </countTo>
    <button @click="getNumber">获取值</button>
    <button @click="updateNumber">更新值</button>
  </div>
</template>

<script>
import countTo from '_c/count-to'
export default {
  data () {
    return {
      endVal: 100,
      delay: 1000
    }
  },
  components: {
    countTo
  },
  methods: {
    getNumber () {
      console.log(this.$refs.countUp.getCount())
    },
    updateNumber () {
      this.endVal += Math.random() * 100
    },
    handleEnd (val) {
      console.log('end->', val)
    }
  }
}
</script>

<style>

</style>
