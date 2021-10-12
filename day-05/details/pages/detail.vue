<template>
  <div class="detail">
    <h1>详情：details</h1>
    <p>标题{{detail.title}}</p>
    <p v-html="detail.content"></p>
  </div>
</template>

<script>
export default {
  async asyncData({query,app}) {
    const {data: {data: detail}} = await app.$api.getTopicsDetail("/topic/"+query.id)
    return {
      detail
    }
  }
}
</script>

<style>

</style>