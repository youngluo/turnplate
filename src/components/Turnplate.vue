<template>
  <ul class="turnplate">
    <li
      class="turnplate-item"
      v-for="i in count"
      @click="onStart"
      :key="i"
    >
      {{i === 5 ? placeholder : i}}
    </li>
  </ul>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class Turnplate extends Vue {
  @Prop() private placeholder: string = '开始';

  @Prop() private dataSource: [] = [];

  @Prop() private target: [] = [];

  count: number = 9;

  onStart() {

  }
}
</script>

<style lang="scss" scoped>
.turnplate {
  list-style: none;
  display: grid;
  grid-template-rows: repeat(3, 1fr);
  grid-template-columns: repeat(3, 1fr);
  width: 320px;
  height: 320px;
  margin: 100px auto;
  padding: 0;
  &-item {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: bisque;
    &.active {
      background-color: yellow;
    }
  }
}
</style>
