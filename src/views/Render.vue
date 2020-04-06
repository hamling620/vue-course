<template>
  <div>
    <!-- <render-com></render-com> -->
    <list :list="list" :render="renderFunc"></list>
  </div>
</template>

<script>
import List from '_c/list'
// const RenderCom = {
//   render: h => {
//     return h('div', {
//       class: {
//         renderClass: true
//       },
//       style: {
//         color: '#f40',
//         fontSize: '20px'
//       },
//       props: {
//         name: {
//           type: String,
//           default: ''
//         }
//       },
//       attrs: {
//         id: 'box'
//       },
//       domProps: {
//         // innerHTML: 'hello render function'
//       },
//       key: 'myKey',
//       ref: 'myRef',
//       slot: 'name-of-slot',
//       directives: [],
//       scopedSlots: () => {
//         // default: props => h('span', props.text)
//       },
//       on: {
//         click () {
//           console.log('on')
//         }
//       },
//       nativeOn: {
//         click () {
//           console.log('nativeOn')
//         }
//       }
//     }, [
//       h('a', {
//         attrs: {
//           href: 'https://www.baidu.com'
//         }
//       }, 'hello'),
//       h('a', {
//         attrs: {
//           href: 'https://www.qq.com'
//         }
//       }, 'world')
//     ])
//   }
// }
export default {
  components: {
    // RenderCom,
    List
  },
  data () {
    return {
      list: [
        { id: 1, name: '北京', url: 'https://www.baidu.com' },
        { id: 2, name: '上海', url: 'https://www.qq.com' }
      ]
    }
  },
  methods: {
    renderFunc (h, name, url) {
      return h('a', {
        style: {
          color: '#2ab561',
          textDecoration: 'none'
        },
        attrs: {
          href: url
        }
      }, name)
    }
  }
}
</script>

<style lang="less">
  // .renderClass {
  //   border: 1px solid #ccc;
  // }
</style>
