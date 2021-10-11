# day-04

## Vue vant组件库插件使用

### Vue vant组件库插件全部导入使用
1.　yarn　下载组件库
```shell
yarn add vant
```
2.　配置组件库到Vue实例上 & 导入样式
`plugins/vant.js`
```js
import Vue from "vue";
import Vant from "vant";
// 导入所有样式
import 'vant/lib/index.css';
Vue.use(Vant);
```
3. 在nuxt.config.js中注册该组件
`nuxt.config.js`
```js
export default {
  plugins: [
    "~/plugins/vant.js"
  ],
}
```
4. 页面中使用
`pages/index.vue`
```vue
<template>
  <div class="index">
    <h1>index页面</h1>
    <main>
      <van-button type="primary">主要按钮</van-button>
      <van-button type="info">信息按钮</van-button>
      <van-button type="default">默认按钮</van-button>
      <van-button type="warning">警告按钮</van-button>
      <van-button type="danger">危险按钮</van-button>
    </main>
  </div>
</template>
```

### Vue vant组件库插件全部导入使用
1. 修改vant.js
```js
import Vue from "vue";

// 使用哪个组件导入哪个组件
import { Button } from "vant";
import 'vant/lib/index.css';
Vue.use(Button);
Vue.use(Grid);
Vue.use(GridItem);
```
`pages/index.vue`
```vue
<template>
  <div class="index">
    <h1>index页面</h1>
    <main>
      <van-button type="primary">主要按钮</van-button>
      <van-button type="info">信息按钮</van-button>
      <van-button type="default">默认按钮</van-button>
      <van-button type="warning">警告按钮</van-button>
      <van-button type="danger">危险按钮</van-button>
    </main>
    <main>
      <van-grid>
        <van-grid-item icon="photo-o" text="文字" />
        <van-grid-item icon="photo-o" text="文字" />
        <van-grid-item icon="photo-o" text="文字" />
        <van-grid-item icon="photo-o" text="文字" />
      </van-grid>
    </main>
  </div>
</template>
```

## nuxt中的vuex
- vuex的组成
  1. store 存储数据
  2. mutations 存放同步修改的数据的方法
  3. actions 存放异步操作的方法
  4. getter 访问器
**nuxt内置vux**
### vuex的基本使用
- 一定要导出之后才能进行自动配置
- 页面中触发mutations和actions需要使用this.$store.commit/dispatch
`pages/index.vue`
```vue
<template>
  <div>
    <h1>{{$store.state.count}}</h1>
    <button @click="increment">同步加</button>
    <button @click="asyncIncrement">异步加</button>
  </div>
</template>

<script>
export default {
  methods: {
    increment() {
      this.$store.commit("increment",10)
    },
    asyncIncrement() {
      this.$store.dispatch("asyncIncrement",100)
    }
  }
}
</script>
```


`store/index.js`
```js
export const state = () => {
  return {
    count: 0
  }
}
export const mutations = {
  // 同步 加
  increment(state,payload) {
    state.count+= payload
  }
}
export const actions = {
  asyncIncrement({commit},payload) {
    setTimeout(() => {
      commit("increment", payload)
    },1000)
  }
}
```

### 解构vuex中的store中的所有数据
`pages/index.vue`
```vue
<template>
  <div>
    <h1>{{ $store.state.count }}</h1>
    <h2>{{count1}}</h2>
    <h3>{{count}}</h3>
    <button @click="increment(10)">同步加</button>
    <button @click="asyncIncrement(100)">异步加</button>
  </div>
</template>

<script>
import {mapState, mapMutations, mapActions} from "vuex"
export default {
  computed: {
    count1() {
      return this.$store.state.count;
    },
    // 结构count
    ...mapState(["count"])
  },
  methods: {
    // increment() {
    //   this.$store.commit("increment", 10);
    // },
    // asyncIncrement() {
    //   this.$store.dispatch("asyncIncrement", 100);
    // },
    ...mapMutations(["increment"]),
    ...mapActions(["asyncIncrement"])
  },
};
</script>
```

### vuex中的模块化使用
- 由于有很多页面，所有极有可能会出现很多数据，所以我们需要对数据根据功能进行拆分子模块
> 如何访问模块化的state
$store.state.todulist.arr
`layouts/default.vue`
```vue
<template>
  <div class="default">
    <h1>vuex</h1>
    <nav>
      <span><Nuxt-link to="/">vuex的基本使用</Nuxt-link></span>
      <br />
      <span><Nuxt-link to="/vuemodule">vuex的模块化使用</Nuxt-link></span>
    </nav>
    <main>
      <Nuxt></Nuxt>
    </main>
  </div>
</template>
```

`pages/vuemodule.vue`
```vue
<template>
  <div>
    <h1>vuex的模块化使用</h1>
    <p>{{ $store.state.count }}</p>
    <p>$store.state.todolist.arr：{{ $store.state.todolist.arr }}</p>
    <button @click="getNum">增加随机数列</button>
  </div>
</template>

<script>
export default {
  methods: {
    getNum() {
      const random = this.getRandom(30, 50);
      console.log(random)
      // 修改store/index.js中的state
      this.$store.commit("updataCount", random);
      // 修改store/todolist.js中的arr 即可使用模块化的vuex
      this.$store.commit("todolist/updataArr",random)
    },
    
    getRandom(min, max) {
      return Math.floor(Math.random() * (max - min + 1) + min);
    },
  },
};
</script>
```
`store/todolist.js`
```js
export const state = () => {
  return {
    state: 0,
    arr: [10, 20, 30, 40]
  }
}
export const mutations = {
  updataArr(state,payload) {
    state.arr.push(payload)
  }
}
```