<template>
  <div>
    <div class="assets">
      <h1>assets文件夹中的图片</h1>
      <h2>通过img标签引入图片</h2>
      <img src="~assets/imgs/1.jpg" alt="" style="width: 200px" />
      <!-- 需要通过require的方式使用图片地址 -->
      <h2>通过行内样式以背景图片的方式引入图片</h2>
      <div class="background" :style="backgroundImg"></div>
      <h2>类名显示图片</h2>
      <div class="classshowimg"></div>
    </div>
    <div class="static">
      <h1>static文件夹中的图片</h1>
      <h2>通过img标签引入图片</h2>
      <img src="/imgs/1.jpg" alt="" style="width: 200px">
      <h2>通过行内样式以背景图片的方式引入图片</h2>
      <div class="background" :style="backgroundImg"></div>
      <h2>类名显示图片</h2>
      <div class="classshowimg"></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      backgroundImg: `background-image: url(${require("~/static/imgs/2.jpg")})`,
    };
  },
};
</script>

<style scoped>
.background {
  width: 400px;
  height: 200px;
  background-size: 100% 100%;
  background-repeat: no-repeat;
  background-size: cover;
}
.classshowimg {
  width: 400px;
  height: 200px;
  background-image: url(/imgs/3.jpg);
  background-repeat: no-repeat;
  background-size: cover;
}
</style>