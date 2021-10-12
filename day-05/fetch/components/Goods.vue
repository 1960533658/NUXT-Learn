<template>
  <div class="goods">
    <ul>
      <li v-for="item in $store.state.topics" :key="item.id">
        <nuxt-link to="/detail">{{ item.title }}</nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  
  // 可以在组件中使用
  async fetch() {
    const {
      data: { data: topics },
    } = await this.$api.getTopics("/topics");
    this.$store.commit("updataTopics", topics);
  },
  // 无打印，说明async不能再component组件中使用
  // asyncData() {
  //   console.log("goods")
  // },
};
</script>

<style>
</style>