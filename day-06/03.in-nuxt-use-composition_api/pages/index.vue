<template>
  <div class="index">
    <h1>{{ msg }}</h1>
    <p>{{ count }}</p>
    <button @click="increment">+</button>
    <br />
    <button @click="deIncrement">-</button>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "@vue/composition-api";

// #region 功能方法抽离
const counter: Function = (ref:Function) => {
  const count = ref(0);
  // const count = ref(0);
  const increment: Function = (): void => {
    // count as object
    count.value++;
  };
  const deIncrement: Function = (): void => {
    count.value--;
  };
  return {
    count,
    increment,
    deIncrement,
  };
};
// #endRegion

export default defineComponent({
  setup() {
    const msg = ref<string>("你好 康康");
    // const count = ref<number>(0);
    // const increment:Function = ():void => {
    //   count.value++;
    // };
    // const deIncrement:Function = ():void => {
    //   count.value--;
    // };
    return {
      msg,
      ...counter(ref),
    };
  },
});
</script>