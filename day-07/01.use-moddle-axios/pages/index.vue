<template>
<div class="index">
  <ul>
    <li v-for="item in topics" :key="item.id">
      <!-- 查询参数
        <nuxt-link :to="`/detail?id=${item.id}`">{{item.title}}</nuxt-link>
      -->
      <!-- 路径参数 -->
      <nuxt-link :to="`/detail/${item.id}`">{{item.title}}</nuxt-link>
    </li>
  </ul>
</div>
</template>

<script>
export default {
  // ! 解构axios的方法 使用axios中的$get 获取数据
  async asyncData({$axios}) {
    const {data: topics} = await $axios.$get('https://cnodejs.org/api/v1/topics') 
    return {
      topics
    }
  }
}
</script>
