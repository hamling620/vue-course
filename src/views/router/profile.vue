<template>
  <div class="profile">
    Profile
    <br>
    {{ username }}
  </div>
</template>

<script>
export default {
  props: {
    username: {
      type: String,
      default: 'hamling'
    }
  }
}
</script>

<style scoped>
  .profile {
    border: 1px solid #2ab461;
  }
</style>
