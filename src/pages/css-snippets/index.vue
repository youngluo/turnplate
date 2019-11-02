<template>
  <Layout :style="{flex: 1}">
    <Sider
      :style="{background: '#fff'}"
      hide-trigger
    >
      <i-menu
        :style="{height: '100%'}"
        active-name="wave"
        :dataList="nav"
      />
    </Sider>
    <Content :style="{padding: '24px', background: '#fff'}">
      <router-view />
    </Content>
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
    {
      name: 'wave', text: '水波效果', path: '/css-snippets/wave', icon: 'wave'
    }
  ]
}
</script>
