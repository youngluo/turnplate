<template>
  <Turnplate />
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Turnplate from './components/Turnplate.vue';

@Component({
  components: {
    Turnplate,
  },
})
export default class App extends Vue {}
</script>
