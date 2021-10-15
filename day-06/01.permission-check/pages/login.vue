<template>
  <div class="login">
    账号：<input type="text" name="user" id="1" />
    <br />
    密码：<input type="password" name="password" id="1" />
    <br />
    <button @click="login">登录</button>
  </div>
</template>

<script>
import Cookie from "js-cookie";
export default {
  methods: {
    login() {
      // 定义登录密钥
      const auth = "sadsadsadsadasdsasadsad";
      setTimeout(() => {
        // 存储用户数据到vuex中
        this.$store.commit("updateStatus", auth);
        // 存储cookie
        Cookie.set("auth",auth);
        // 跳转首页
        this.$router.push("/");
      }, 1000);
    },
  },
};
</script>