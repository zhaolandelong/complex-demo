<template functional>
  <el-header class="my-header">
    <div class="my-header-logo-wrap">
      <img class="my-header-logo" src="../assets/logo.png">
    </div>
    Welcome!
  </el-header>
</template>
<style lang="less">
.my-header {
  background-color: #42b983;
  color: #fff;
  line-height: 60px;
  &-logo {
    width: 30px;
    height: 30px;
    &-wrap{
      display: inline-block;
      background: #fff;
      border-radius: 50%;
      width: 40px;
      height: 40px;
      padding: 2px 5px;
      vertical-align: middle;
      overflow: hidden;
      margin-right: 20px;
    }
  }
}
</style>
