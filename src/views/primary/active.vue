<template>
  <div>
    <ul>
      <li @click="toggleTab('home')">首页</li>
      <li @click="toggleTab('archive')">归档</li>
      <li @click="toggleTab('about')">关于</li>
    </ul>
    <keep-alive>
      <component :is="tabName"></component>
    </keep-alive>
  </div>
</template>

<script>
export default {
  data () {
    return {
      tabName: 'homeComponent'
    }
  },
  components: {
    homeComponent: {
      render: h => {
        return (<div>hello home</div>)
      }
    },
    archiveComponent: {
      render: h => {
        return (<div>hello archieve</div>)
      }
    },
    aboutComponent: {
      render: h => {
        return (<div>hello about</div>)
      }
    }
  },
  methods: {
    toggleTab (name) {
      this.tabName = name + 'Component'
    }
  }
}
</script>

<style scoped>
  ul {
    list-style: none;
    display: flex;
    width: 200px;
  }
  li {
    flex: 1;
    background-color: #ccc;
  }
</style>
