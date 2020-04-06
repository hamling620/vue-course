<template>
  <div>
    <div>{{ reverseMessage }}</div>
    <div>{{ firstName }}</div>
    <div>{{ lastName }}</div>
    <div>{{ fullName }}</div>
    <input type="text" v-model.lazy="fullName">
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: 'hello hamling',
      firstName: 'Dwayne',
      lastName: 'Wade'
    }
  },
  computed: {
    reverseMessage () {
      return this.msg.split('').reverse().join('')
    },
    fullName: {
      get: function() {
        return this.firstName + ' ' + this.lastName
      },
      set: function(newVal) {
       const full = newVal.split(' ')
       this.firstName = full[0]
       this.lastName = full[1]
      }
    }
  }
}
</script>

<style>

</style>
