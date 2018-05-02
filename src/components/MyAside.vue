<template>
  <el-aside width="200px">
    <el-menu class="my-aside" :default-active="$route.path" router>
      <el-menu-item index="/">Home</el-menu-item>
      <el-menu-item index="/staff">Staff</el-menu-item>
      <el-menu-item index="/about">About</el-menu-item>
    </el-menu>
  </el-aside>
</template>
<script>
export default {
  name: 'myAside',
  methods: {
  },
};
</script>

<style lang="less">
.my-aside {
  line-height: 200px;
  height: 100%;
}
</style>
