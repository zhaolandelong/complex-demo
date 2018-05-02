<template>
  <el-container>
    <my-header />
    <el-container>
      <el-aside width="200px">Aside</el-aside>
      <el-main>Main</el-main>
    </el-container>
    <el-footer>Footer</el-footer>
  </el-container>
</template>

<script>
import MyHeader from './MyHeader';

export default {
  name: 'HelloWorld',
  components: {
    MyHeader,
  },
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
    };
  },
  methods: {
    doMsgTest() {
      this.$message('This is a msg!');
    },
  },
};
</script>
