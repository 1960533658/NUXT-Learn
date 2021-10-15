<template>
  <div class="my">
    <h1>我的页面</h1>
    <nuxt-link to="/">返回首页</nuxt-link>
  </div>
</template>

<script>
export default {
  middleware: "auth"
}
</script>