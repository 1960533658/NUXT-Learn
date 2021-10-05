<template>
  <div class="box">
    <h1>layouts page</h1>
    <ul>
      <li>
        <NuxtLink to="/">首页</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/about">关于</NuxtLink>
      </li>
    </ul>
    <Nuxt></Nuxt>
  </div>
</template>

<style>
.box {
  width: 500px;
  margin: 0 auto;
}
li {
  display: inline;
  list-style: none;
}
a.nuxt-link-active {
  font-weight: 700;
}
a.nuxt-link-exact-active {
  color: gold;
}
</style>