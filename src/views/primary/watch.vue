<template>
  <div>
    <input type="text" v-model.lazy="school.name">
    <div>{{ school.name }}</div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      school: {
        name: 'XiangYangUniversity',
        age: 70
      }
    }
  },
  watch: {
    // school: {
    //   deep: true,
    //   // immediate: true,
    //   handler (newVal, oldVal) {
    //     console.log(newVal.name, oldVal.name)
    //     this.handleAlert()
    //   }
    // }
    'school.name': {
      handler: function(newVal, oldVal){
        this.handleAlert()
      }
    }
  },
  methods: {
    handleAlert () {
      if (this.school.name === 'WuHanUniversity') {
        alert('学大汉武立国')
      }
    }
  }
}
</script>

<style>

</style>
