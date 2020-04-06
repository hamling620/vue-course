<template>
  <label>
    {{ label }}
    <input v-bind="$attrs" type="text" :value="value" v-on="inputListeners">
  </label>
</template>

<script>
export default {
  inHeritAttrs: false,
  props: ['label', 'value'],
  computed: {
    inputListeners: function () {
      let self = this
      // console.log(self.$listeners)
      return Object.assign({}, self.$listeners, {
        input: function (e) {
          self.$emit('goInput', e.target.value)
        }
      })
    }
  }
}
</script>

<style>

</style>
