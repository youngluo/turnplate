<template>
  <wave>点击</wave>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Wave from '@/components/Wave.vue'

@Component({
  components: {
    Wave
  }
})
export default class App extends Vue { }
</script>
