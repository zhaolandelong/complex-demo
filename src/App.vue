<template>
<div id="app">
  <el-container class="wrap">
    <my-header />
    <el-container>
      <my-aside/>
      <el-main>
        <div class="wrap-content">
          <router-view/>
        </div>
      </el-main>
    </el-container>
    <my-footer/>
  </el-container>
</div>
</template>

<script>
import MyHeader from './components/MyHeader';
import MyFooter from './components/MyFooter';
import MyAside from './components/MyAside';

export default {
  name: 'App',
  components: {
    MyHeader,
    MyFooter,
    MyAside,
  },
};
</script>

<style lang="less">
html,body,#app,.wrap{min-height: 100vh; min-width: 1200px;}
body {
  font-family: "Helvetica Neue", Helvetica, Arial, "PingFang SC",
    "Hiragino Sans GB", "Heiti SC", "Microsoft YaHei", "WenQuanYi Micro Hei",
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: #f5f5f5;
}
body, button, input, select, option, textarea, optgroup, img{font: 14px/1.2 "Helvetica Neue", Helvetica, Arial, "PingFang SC", "Hiragino Sans GB", "Heiti SC", "Microsoft YaHei", "WenQuanYi Micro Hei", sans-serif;}
body, h1, h2, h3, h4, h5, h6, hr, p, blockquote, dl, dt, dd, ul, ol, li, pre, form, fieldset, lengend, label, button, input, select, option, textarea, optgroup, table, thead, tbody, tfoot, tr, th, td, div, span, img, a, em, i, iframe, :before, :after{box-sizing: border-box; margin: 0; padding: 0;}
.wrap-content{
  border: 1px solid #d9d9d9;
  border-radius: 1px;
  background-color: #fff;
  padding: 20px;
}
</style>
