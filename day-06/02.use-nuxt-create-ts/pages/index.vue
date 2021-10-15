<template>
  <div class="index">
    <h1>{{ msg }}</h1>
    <p>{{ num }}</p>
    <button @click="increment">＋</button>
    <br />
    <button @click="deIncrement">-</button>
  </div>
</template>

<script lang="ts">
import { Vue,Component } from "vue-property-decorator";
@Component
export default class PageIndex extends Vue {
  msg: String = "hello kangkang";
  num: number = 10;
  increment() {
    this.num+=1
  }
  deIncrement() {
    this.num-=1
  }
}
</script>