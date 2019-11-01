<template>
  <Layout class="wrapper">
    <div class="header">
      <i-menu
        active-name="css-snippets"
        :dataList="topNav"
        mode="horizontal"
        class="menu"
      />
    </div>
    <Layout class="container">
      <Sider
        :style="{background: '#fff'}"
        hide-trigger
      >
        <i-menu
          :style="{height: '100%'}"
          :dataList="leftNav"
          active-name="wave"
        />
      </Sider>
      <Content :style="{padding: '24px', background: '#fff'}">
        Content
      </Content>
    </Layout>
  </Layout>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import IMenu from './containers/Menu.vue'

@Component({
  components: { IMenu }
})
export default class App extends Vue {
  topNav = [
    { name: 'css-snippets', path: '/css-snippets', icon: 'md-code' }
  ]

  leftNav = [
    { name: 'wave', path: '/wave', icon: 'wave' }
  ]
}
</script>

<style lang="scss">
.wrapper {
  display: flex;
  flex-direction: column;
  height: 100vh;
  padding-top: 76px;
}
.header {
  position: fixed;
  top: 0;
  width: 100%;
  padding: 0 50px;
  z-index: 999;
  display: flex;
  justify-content: flex-end;
  background: #fff;
  border-bottom: solid 1px rgba(0, 0, 0, 0.1);
}
.menu {
  &.ivu-menu-horizontal.ivu-menu-light:after {
    display: none;
  }
}
.container {
  flex: 1;
}
</style>
