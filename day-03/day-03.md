# day-03

## 嵌套路由

`layouts/default.vue`
```vue
<template>
  <div>
    <nav>
      <ul>
        <li>
          <nuxt-link to="/">Home</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/parent">parent</nuxt-link>
        </li>
      </ul>
    </nav>
    <main>
      <Nuxt></Nuxt>
    </main>
  </div>
</template>

<script>
export default {

}
</script>

<style>
:root {
  --primary-color: #00c58e;
}

body {
  font-family: system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
    Helvetica Neue, Arial, Noto Sans, sans-serif, Apple Color Emoji,
    Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji;
  margin: 0;
}

a {
  color: inherit;
  text-decoration: none;
}
nav a:hover {
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}

main {
  margin: 0 auto;
  margin-top: 100px;
  padding: 0 1rem;
  max-width: 1280px;
  text-align: center;
}

img {
  margin-bottom: 1rem;
}

ul {
  list-style-type: none;
  padding: 0;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}
li {
  margin: 0 0.5rem;
  padding: 0.25rem;
  font-size: 1.2rem;
}

nav {
  padding: 0 1rem;
}
.nuxt-link-exact-active,.active {
  color: #00c58e;
}
</style>
```

`pages/index.vue`
```vue
<template>
  <div>
    <h1>主页</h1>
  </div>
</template>
```
`pages/parent.vue`
```vue
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
```
> 二级路由
`pages/child1.vue`
```vue
<template>
  <div>
    <h2>儿子1</h2>
    <p>{{$route.path}}</p>
  </div>
</template>
```
`pages/child2.vue`
```vue
<template>
  <div>
    <h2>儿子2</h2>
    <p>{{$route.path}}</p>
  </div>
</template>
```

**`总结：二级路由需要创建一个与父级文件同级的文件夹，并将子文件放在其内部经过Nuxt-child显示即可`**

## nuxt过渡
`layouts/default.vue`
```vue
<template>
  <div>
    <nav>
      <ul>
        <li>
          <nuxt-link to="/">Home</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/parent">parent</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/uncle">uncle</nuxt-link>
        </li>
      </ul>
    </nav>
    <main>
      <Nuxt></Nuxt>
    </main>
  </div>
</template>

<script>
export default {};
</script>

<style>
/* 页面切入和页面离开后透明度为0 */
.page-enter,
.page-leave-to {
  opacity: 0;
}
/* 页面切入和页面离开后透明度为1 动画时间为0.8秒*/
.page-enter-active, .page-leave-active {
  transition: opacity 0.8s;
}
:root {
  --primary-color: #00c58e;
}

body {
  font-family: system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
    Helvetica Neue, Arial, Noto Sans, sans-serif, Apple Color Emoji,
    Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji;
  margin: 0;
}

a {
  color: inherit;
  text-decoration: none;
}
nav a:hover {
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}

main {
  margin: 0 auto;
  margin-top: 100px;
  padding: 0 1rem;
  max-width: 1280px;
  text-align: center;
}

img {
  margin-bottom: 1rem;
}

ul {
  list-style-type: none;
  padding: 0;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}
li {
  margin: 0 0.5rem;
  padding: 0.25rem;
  font-size: 1.2rem;
}

nav {
  padding: 0 1rem;
}
.nuxt-link-exact-active,
.active {
  color: #00c58e;
}
</style>
```
`pages/uncle.vue`
```vue
<template>
  <div>
    <h1>这是uncle</h1>
  </div>
</template>

```

## 自定义动画
`pages/uncle`
```vue
<template>
  <div>
    <h1>这是uncle</h1>
  </div>
</template>

<script>
export default {
  // 抛出操作的动画名称
  transition: "uncle",
};
</script>

```
`layouts/default.vue`
```vue
<template>
  <div>
    <nav>
      <ul>
        <li>
          <nuxt-link to="/">Home</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/parent">parent</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/uncle">uncle</nuxt-link>
        </li>
      </ul>
    </nav>
    <main>
      <Nuxt></Nuxt>
    </main>
  </div>
</template>

<script>
export default {};
</script>

<style>
.page-enter,
.page-leave-to {
  opacity: 0;
}
.page-enter-active, .page-leave-active {
  transition: opacity 0.8s;
}

/* uncle 自定义动画时长 */
.uncle-enter-active {
  animation: uncle-in 2s;
}
.uncle-leave-active {
  animation: uncle-out s;
}

/* 自定义动画动作 */
@keyframes uncle-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(2);
  }
  100% {
    transform: scale(1);
  }
}

@keyframes uncle-out {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(2);
  }
  100% {
    transform: scale(0);
  }
}
:root {
  --primary-color: #00c58e;
}

body {
  font-family: system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
    Helvetica Neue, Arial, Noto Sans, sans-serif, Apple Color Emoji,
    Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji;
  margin: 0;
}

a {
  color: inherit;
  text-decoration: none;
}
nav a:hover {
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}

main {
  margin: 0 auto;
  margin-top: 100px;
  padding: 0 1rem;
  max-width: 1280px;
  text-align: center;
}

img {
  margin-bottom: 1rem;
}

ul {
  list-style-type: none;
  padding: 0;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}
li {
  margin: 0 0.5rem;
  padding: 0.25rem;
  font-size: 1.2rem;
}

nav {
  padding: 0 1rem;
}
.nuxt-link-exact-active,
.active {
  color: #00c58e;
}
</style>
```

## 中间件
- 中间件就是一个函数， 运行再客户端或者服务端
- 项目启动或者刷新页面运行再服务端
- 路由跳转运行再客户端
- process.server/process.static判断执行环境

### 全局中间件
- 当中间件为全局的时候，路由跳转和页面刷新都会执行，刷新的时候再服务端执行，跳转的时候在客户端执行
- 执行顺序
  1. 全局中间件
  2. 布局中间件（layouts）
  3. 页面中间件（pages）
创建全局中间件：`middleware/auth.js`
```js
export default function () {
  console.log("中间件auth执行")
}
```
注册使用全局中间件:`nuxt.config.js`
```js
export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'nuxt-middleware',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },
  // ★ 注册全局中间件
  router: {
    middleware: "auth"
  }
}
```

### 布局中间件（layout）

- 直接在layout中的default注册中间件

创建布局中间件文件：`layouts/default`
```js
export default function () {
  console.log("中间件auth2执行了")
}
```

注册使用布局中间件：`layouts/default`
```vue
<template>
  <div>
    <h1>layout页面</h1>
    <nav>
      <nuxt-link to="/">首页</nuxt-link>
      <nuxt-link to="/fade">fade</nuxt-link>
    </nav>
    <main>
      <Nuxt></Nuxt>
    </main>
  </div>
</template>

<script>
export default {
  middleware: "auth2"
}
</script>

<style>

</style>
```

### 页面中间件
- 页面中间件只能用于挂载了middleware的页面
`middleware/auth3.js`
```js
export default function () {
  console.log("中间件 auth3 执行")
}
```
`pages/index.vue`
```vue
<template>
  <div>
    <h1>首页</h1>
  </div>
</template>

<script>
export default {
  middleware: "auth3"
};
</script>
```

## 插件

### 什么是插件

> 插件就是一个js文件，这个文件会在每次刷新页面的时候在客户端和服务器端都执行一遍

### 插件的用途

> 当我们需要用到第三方库的时候（element UI， Vant， axios），通过插件来集成到vue

### 插件分类
- 默认插件 在客户端和服务器端都会自动执行
  1. 注入插件：插件注入后整个应用程序中都可以使用，典型应用场景：axios的封装
  2. vue插件：插件注入后，可以结合vue进行辅助开发，典型应用场景是vant，elementUI等
- 客户端插件：只在客户端自动执行的插件
- 服务端插件：只在服务端自动执行的插件
#### 默认插件
> 项目启动时会/根目录刷新 服务器端和客户端都会执行一次，此时需要注意区分环境

> 路由切换的时候该插件不会执行

`plugins/test.js`
```js
export default () => {
  console.log("插件 test 执行")
}
```

`nuxt.config.js`
```js
export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'nuxt-plug',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    "~/plugins/test.js" // 效果等同于{src:"~/plugins/both-test.js",mode: "both" }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}

```

### 客户端插件
> 客户端插件只在客户端执行
> 只会执行一次

`plugins/client-test.js`
```js
export default () => {
  console.log("客户端插件 client-test 执行了");
}
```
`nuxt.config.js`
```js
export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'nuxt-plug',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: "~/plugins/client-test.js", mode: "client" },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
```

#### 服务端插件
> 服务端插件只在服务端执行
> 只会执行一次
`plugins/server-test.js`
```js
export default () => {
  console.log("服务端插件 server-test 执行了");
}
```
`nuxt.config.js`
```js
export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'nuxt-plug',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: "~/plugins/server-test.js", mode: "server" },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
```

#### 命名插件
客户端:
> 一定要注意命名规范：XXX.client.js

`client-test.client.js`
```js
export default () => {
  console.log("客户端插件 client-test.client.js 执行了");
}
```
```js
plugins: [
  "~/plugins/client-test.client.js",
],
```

服务端：
> 一定要注意命名规范：XXX.server.js
`server-test.server.js`
```js
export default () => {
  console.log("服务端插件 server-test.server.js 执行了");
}
```
```js
plugins: [
  "~/plugins/server-test.server.js",
],
```
### axios插件封装
`plugins/axios.js`
```js
import axios from "axios";
export default (context, inject) => {
  // 注入插件
  inject('api', {
    getTopics(path) {
      return axios.get(`https://cnodejs.org/api/v1${path}`)
    }
  })
}
```
`nuxt.config.js`
```js
export default {
  plugins: [
    "~/plugins/axios.js"
  ],
}
```
`pages/index.vue`
```vue
<template>
  <div>
    <h1>1111</h1>
    <nav>
      <ul>
        <li v-for="item in topics" :key="item.id">{{item.title}}</li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  async asyncData({app}) {
    const {data:{data:topics}} = await app.$api.getTopics('/topics')

    return {
      topics
    }
  }
};
</script>
```