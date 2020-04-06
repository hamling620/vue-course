<template>
  <div>
    <ul ref="ulElm">
      <li v-for="(item, index) in list" :key="`${item}_${index}`">
        {{ item }}
      </li>
    </ul>
    <button @click="addItem">新增</button>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        list: ['vue', 'react', 'ts', 'flutter']
      }
    },
    methods: {
      addItem() {
        this.list.push(Date.now())
        this.list.push(Date.now())
        this.list.push(Date.now())
        // 1.异步渲染，$nextTick待DOM渲染完毕之后再回调
        // 2.页面渲染的时候，会将data数据修改作整合，多次data修改只会渲染一次
        this.$nextTick(() => {
          const ulElm = this.$refs.ulElm
          console.log(ulElm.childNodes.length)
        })
      }
    }
  }
</script>

<style scoped>

</style>
