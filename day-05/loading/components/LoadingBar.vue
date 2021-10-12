<template>
  <div v-if="show" class="loading">
    <h1>正在加载中...</h1>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: false
    }
  },
  methods: {
    // 开始加载
    start() {
      this.show = true
    },
    // 结束加载
    finish() {
      this.show = false
    }
  }
}
</script>

<style>
.loading {
  width: 500px;
  margin: 0 auto;
}
</style>