<template>
  <div class="index">
    <!-- <h1>fetch</h1> -->
    <p>{{msg}}</p>
    <p>{{age}}</p>
    <Goods />
  </div>
</template>

<script>
export default {
  data() {
    return {
    age: 0
    }
  },
  asyncData() {
    return {
      msg: "我是asyncData返回的数据"
    }
  },
  fetch() {
    const server = process.server ? "服务端":"客户端";
    console.log(server)
    this.age=20
    return {
      // ! 不能直接使用通过fetch中的数据
      // age: "我是fetch返回的数据"
    }
  }
}
</script>


