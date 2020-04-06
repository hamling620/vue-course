<template>
  <div class="layout-wrapper">
    <Layout class="layout-outer">
      <Sider collapsible hide-trigger breakpoint="md" v-model="collapsed"></Sider>
      <Layout>
        <Header class="header-wrapper">
          <Icon type="md-menu" size="36" @click.native="handleCollapse" :class="triggerClasses"/>
        </Header>
        <Content class="content-wrapper">
          <Card shadow class="page-card">
            <router-view/>
          </Card>
        </Content>
      </Layout>
    </Layout>
  </div>
</template>

<script>
export default {
  data () {
    return {
      collapsed: false
    }
  },
  computed: {
    triggerClasses () {
      return [
        'trigger-icon',
        this.collapsed ? 'rotate' : ''
      ]
    }
  },
  methods: {
    handleCollapse () {
      this.collapsed = !this.collapsed
    }
  }
}
</script>

<style lang="less">
  .layout-wrapper, .layout-outer {
    height: 100%;
    .header-wrapper {
      background-color: #fff;
      box-shadow: 0 1px 1px 1px rgba(0, 0, 0, .3);
      padding: 0 24px;
      .trigger-icon {
        cursor: pointer;
        transition: transform .3s ease;
        &.rotate {
          transform: rotateZ(-90deg);
          transition: transform .3s ease;
        }
      }
    }
    .content-wrapper {
      padding: 10px;
      .page-card {
        min-height: calc(100vh - 84px);
      }
    }
  }
</style>
