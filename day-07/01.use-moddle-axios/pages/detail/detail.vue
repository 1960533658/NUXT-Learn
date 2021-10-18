<template>
  <div>
    <h1>{{detail.title}}</h1>
    <div v-html="detail.content"></div>
  </div>
</template>

<script>
export default {
  /**
   * 解构axios， 获取axios插件库中的方法
   * 解构query， 获取页面路由传递过来的数据
   */
  
  //#region  查询参数获取路径数据
  async asyncData({$axios,query}) {
    const {data: detail} = await $axios.$get(`https://cnodejs.org/api/v1/topic/${query.id}`)
    return {
      detail
    }
  }
  //#endregion
}
</script>