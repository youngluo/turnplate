<template>
  <Wave>wave</Wave>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Turnplate from './components/Turnplate.vue';
import Wave from './components/Wave.vue';

@Component({
  components: {
    Turnplate,
    Wave
  }
})
export default class App extends Vue { }
</script>
