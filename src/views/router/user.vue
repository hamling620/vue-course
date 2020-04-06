<template>
  <div>
    User: {{ $route.params.id }}
    <br>
    <router-link :to="{name: 'profile'}">Profile</router-link>
    <router-link :to="{name: 'posts'}">Posts</router-link>
    <router-view/>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>
