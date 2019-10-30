<template>
  <Header :style="{background: '#fff'}">
    <Menu
      :style="{padding: 0}"
      mode="horizontal"
      active-name="1"
    >
      <router-link
        v-for="item in nav"
        :key="item.name"
        :to="item.path"
      >
        <MenuItem :name="item.name">
        <Icon :type="item.icon" />
        {{item.name}}
        </MenuItem>
      </router-link>
    </Menu>
  </Header>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class IHeader extends Vue {
  nav = [
    { name: 'css-snippets', path: '/css-snippets', icon: 'ios-navigate' }
  ]
}
</script>
