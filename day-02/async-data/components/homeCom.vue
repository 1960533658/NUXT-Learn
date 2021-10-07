<template>
  <div>
    <h1>homeComponents</h1>
    <p>{{home}}</p>
  </div>
</template>

<script>
export default {
  // & 不能通过功能组件触发asyncData
  // async() {
  //   console.log("我在Home中通过功能组件触发了")
  //   return {
  //     home: "我在Home中通过功能组件触发了"
  //   }
  // }
}
</script>

<style>

</style>