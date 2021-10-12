<template>
  <div class="index">
    <h1>首页</h1>
    <LoadingBar></LoadingBar>
  </div>
</template>

<script>
export default {
  mounted() {
    // 首先保证可以获取到dom实例
    this.$nextTick(() => {
      // 让组件刚进入的时候显示正在加载...
      this.$nuxt.$loading.start();
      setTimeout(() => {
        // 让组件显示的时候加载完毕 消失
        this.$nuxt.$loading.finish();
      }, 3000);
    });
  },
};
</script>
