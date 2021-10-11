<template>
  <div>
    <h1>{{ $store.state.count }}</h1>
    <h2>{{count1}}</h2>
    <h3>{{count}}</h3>
    <button @click="increment(10)">同步加</button>
    <button @click="asyncIncrement(100)">异步加</button>
  </div>
</template>

<script>
import {mapState, mapMutations, mapActions} from "vuex"
export default {
  computed: {
    count1() {
      return this.$store.state.count;
    },
    // 结构count
    ...mapState(["count"])
  },
  methods: {
    // increment() {
    //   this.$store.commit("increment", 10);
    // },
    // asyncIncrement() {
    //   this.$store.dispatch("asyncIncrement", 100);
    // },
    ...mapMutations(["increment"]),
    ...mapActions(["asyncIncrement"])
  },
};
</script>
