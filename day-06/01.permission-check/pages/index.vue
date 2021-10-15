<template>
  <div class="index">
    <h1>首页</h1>
    <div v-if="!$store.state.auth">
      您未登录 Plass <nuxt-link to="login">Login</nuxt-link>
    </div>
    <div v-else>
      您已登录请前往 <nuxt-link to="my">我的页面</nuxt-link>
      <div>
        <button @click="loginout">退出登录</button>
      </div>
    </div>
  </div>
</template>

<script>
import Cookie from "js-cookie"
export default {
  methods: {
    loginout() {
      setTimeout(() => {
        this.$store.commit("updateStatus", "");
        Cookie.set("auth","")
      }, 1000);
    }
  }
};
</script>
