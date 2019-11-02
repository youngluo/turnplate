<template>
  <Layout class="wrapper">
    <div class="header">
      <i-menu
        mode="horizontal"
        :dataList="nav"
      />
    </div>
    <router-view />
  </Layout>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import IMenu from '@/containers/Menu.vue'

@Component({
  components: {
    IMenu
  }
})
export default class App extends Vue {
  nav = [
    { name: 'css-snippets', path: '/css-snippets', icon: 'md-code' }
  ]
}
</script>

<style lang="scss" scoped>
.wrapper {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
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
</style>
