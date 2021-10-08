<template>
  <div>
    <h1>父级路由(二级路由页面）</h1>
    <nav>
      <nuxt-link to="/parent/child1">child1</nuxt-link>
      <nuxt-link to="/parent/child2">child2</nuxt-link>
    </nav>
    <main>
      <NuxtChild></NuxtChild>
    </main>
  </div>
</template>