<template>
  <div>
    {{ inputVal }}
    <br>
    <Input
    :value="inputVal" :label="label" @goInput="handleInput" @focus="handleOnFocus" v-on="$listeners"/>
    <hr>
    {{ isChecked }}
    <br>
    <Checkbox :isChecked="isChecked" :label="label" @goChange="handleCheck"></Checkbox>
  </div>
</template>

<script>
import { Input, Checkbox } from '_c/model'
export default {
  components: {
    Input,
    Checkbox
  },
  data() {
    return {
      inputVal: '',
      label: 'msg',
      isChecked: false
    }
  },
  methods: {
    handleInput(value) {
      this.inputVal= value
    },
    handleOnFocus () {
      console.log('hello')
    },
    handleCheck (value) {
      this.isChecked = value
    }
  }
}
</script>

<style>

</style>
