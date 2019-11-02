<template>
  <button
    :class="['button', {'wave': isWave}]"
    @animationend="onAnimationend"
    @click="onClick"
  >
    <slot />
  </button>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class Wave extends Vue {
  isWave = false

  onAnimationend() {
    this.isWave = false
  }

  onClick() {
    this.isWave = true
  }
}
</script>

<style lang="scss" scoped>
$color: #1890ff;
.button {
  position: relative;
  outline: none;
  border: none;
  width: 120px;
  height: 40px;
  border-radius: 4px;
  background: $color;
  color: #fff;
  cursor: pointer;
}

.wave {
  &::after {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    display: block;
    border-radius: inherit;
    box-shadow: 0 0 0 0 $color;
    opacity: 0.2;
    animation: fadeEffect 2s cubic-bezier(0.08, 0.82, 0.17, 1),
      waveEffect 0.4s cubic-bezier(0.08, 0.82, 0.17, 1);
    animation-fill-mode: forwards;
  }
}

@keyframes waveEffect {
  100% {
    box-shadow: 0 0 0 6px $color;
  }
}

@keyframes fadeEffect {
  100% {
    opacity: 0;
  }
}
</style>
