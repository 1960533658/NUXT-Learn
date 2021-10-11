<template>
  <div>
    <h1>vuex的模块化使用</h1>
    <p>{{ $store.state.count }}</p>
    <p>$store.state.todolist.arr：{{ $store.state.todolist.arr }}</p>
    <button @click="getNum">增加随机数列</button>
  </div>
</template>

<script>
export default {
  methods: {
    getNum() {
      const random = this.getRandom(30, 50);
      console.log(random)
      // 修改store/index.js中的state
      this.$store.commit("updataCount", random);
      // 修改store/todolist.js中的arr
      this.$store.commit("todolist/updataArr",random)
    },
    
    getRandom(min, max) {
      return Math.floor(Math.random() * (max - min + 1) + min);
    },
  },
};
</script>

<style>
</style>