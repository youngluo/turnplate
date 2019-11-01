<template>
  <Menu
    :active-name="activeName"
    :width="width"
    :mode="mode"
  >
    <router-link
      v-for="item in dataList"
      :key="item.name"
      :to="item.path"
    >
      <MenuItem :name="item.name">
      <Icon :type="item.icon" />
      {{item.name}}
      </MenuItem>
    </router-link>
  </Menu>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'

interface Item {
  icon: string;
  name: string;
  path: string;
}

@Component
export default class IMenu extends Vue {
  @Prop({ default: [] }) readonly dataList!: Item[]

  @Prop({ default: 'vertical' }) readonly mode!: string

  @Prop({ default: '' }) readonly activeName!: string | number

  @Prop({ default: 'auto' }) readonly width!: string
}
</script>
