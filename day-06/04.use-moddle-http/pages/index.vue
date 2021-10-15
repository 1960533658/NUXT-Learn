<template>
  <div class="index">
    <ul>
      <li v-for="item in topics" :key="item.id">
        <nuxt-link :to="`/detail/?id=${item.id}`">{{item.title}}</nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  async asyncData({$http}) {
    const {data:topics}  = await $http.$get("https://cnodejs.org/api/v1/topics")
    console.log(topics)
    return {
      topics
    }
  }
}
</script>
