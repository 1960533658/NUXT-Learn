<template>
  <div>
    <h1>asyncData</h1>
    <Nuxt-link to="resource">前往资源文件</Nuxt-link>
    <Nuxt-link to="useassetsimg">前往图片引入方式</Nuxt-link>
    <p>{{ dataReturn }}</p>
    <!-- <p>{{ asyncDataReturn }}</p> -->
    <!-- <homeCom></homeCom> -->
    <div>
      <h2>使用原生promise获取数据</h2>
      <!-- <ul>
        <li v-for="item in list" :key="item.id">
          {{ item.title }}
        </li>
      </ul> -->
      <h2>使用await获取数据</h2>
      <ul>
        <!-- <li v-for="item in data" :key="item.id">
          {{ item.title }}
        </li> -->
      </ul>
      <!-- 跳转使用资源文件 -->
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      dataReturn: "我是通过data返回的数据",
    };
  },
  async asyncData() {
    //#region  使用原生promise获取数据
    // return axios.get("https://cnodejs.org/api/v1/topics").then((res) => {
    // console.log(res.data.data);
    //   return {
    //     list: res.data.data,
    //   };
    // });
    // asyncDataReturn: "我是通过asyncData返回的数据",

    //#endregion

    //#region  通过await获取数据
    // const {
    //   data: { data: data },
    // } = await axios.get("https://cnodejs.org/api/v1/topics");
    // return {
    //   data,
    // };
    //#endregion
  },
};
</script>
