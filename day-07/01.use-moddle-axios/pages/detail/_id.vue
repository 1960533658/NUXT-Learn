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
   * 解构params， 获取页面路由传递过来的数据
   */
  
  //#region  路径参数获取路径数据
  async asyncData({$axios,params}) {
    console.log(params)
    const {data: detail} = await $axios.$get(`https://cnodejs.org/api/v1/topic/${params.id}`)
    return {
      detail
    }
  }
  //#endregion
  
}
</script>

<style>

</style>