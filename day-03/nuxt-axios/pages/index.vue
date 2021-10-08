<template>
  <div>
    <h1>1111</h1>
    <nav>
      <ul>
        <li v-for="item in topics" :key="item.id">{{item.title}}</li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  async asyncData({app}) {
    const {data:{data:topics}} = await app.$api.getTopics('/topics')

    return {
      topics
    }
  }
};
</script>
