<template>
  <div>
    <ul>
      <li v-for="item of list" :key="item">
        <input type="checkbox">{{item}}
      </li>
    </ul>
    <input type="text" v-model="inputVal">
    <button @click="handleClick">点击</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: ['Vue', 'React', 'Flutter'],
      inputVal: ''
    }
  },
  methods: {
    handleClick() {
      if (!this.inputVal) return
      this.list.unshift(this.inputVal)
      this.inputVal = ''
    }
  }
}
</script>

<style>

</style>
