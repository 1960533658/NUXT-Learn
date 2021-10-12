<template>
  <div class="index">
    <h1>首页</h1>
    <u>
      <li v-for="item in $store.state.topics" :key="item.id">
        <!-- 动态传递id -->
        <nuxt-link :to="`/detail?id=${item.id}`">{{item.title}}</nuxt-link>
      </li>
    </u>
  </div>
</template>

<script>
export default {
  async fetch({app,store}) {
    const {data: {data: topics}} = await app.$api.getTopics('/topics');
    store.commit("updateTopics",topics)
  }
}
</script>
