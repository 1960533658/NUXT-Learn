<template>
  <div class="index">
    <h1>路径值传递</h1>
    <ul>
      <li>
        <Nuxt-link to="goods/100">goods/100</Nuxt-link>
      </li>
      <li>
        <Nuxt-link to="goods/100/200">goods/100/200</Nuxt-link>
      </li>
    </ul>
    <h1>路径参数传递</h1>
    <ul>
      <li>
        <Nuxt-link to="/orders?id=100">order?id=100</Nuxt-link>
      </li>
      <li>
        <Nuxt-link to="/orders?id=100&num=10">order?id=100&num=10</Nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
}
</script>

<style scoped>
.index {
  width: 500px;
  margin: 0 auto;
}
</style>