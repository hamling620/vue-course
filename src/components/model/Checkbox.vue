<template>
  <label>
    <input type="checkbox" :checked="isChecked" @change="onChange">
  </label>
</template>

<script>
export default {
  props: {
    isChecked: Boolean
  },
  model: {
    prop: 'checked',
    event: 'change'
  },
  methods: {
    onChange (e) {
      this.$emit('goChange', e.target.checked)
    }
  }
}
</script>

<style>

</style>
