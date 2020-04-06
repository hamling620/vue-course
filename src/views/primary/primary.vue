<template>
  <div class="primary">
    <!-- <computed></computed>
    <hr>
    <watch></watch> -->
    <!-- <sync :title="doc.title" v-on:update:title="doc.title = $event"></sync> -->
    <button @click="isShow=true">打开</button>
    <br>
    <sync v-bind:show.sync="isShow" v-show="isShow"></sync>
  </div>
</template>

<script>
// import computed from './computed.vue'
// import watch from './watch.vue'
import sync from './sync.vue'
export default {
  components: {
    // computed,
    // watch
    sync
  },
  data (){
    return {
      isShow: false
    }
  }
}
</script>

<style>

</style>
