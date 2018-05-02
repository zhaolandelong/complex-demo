<template>
  <el-table
    :data="tableData"
    stripe
    style="width: 100%">
    <el-table-column prop="cnName" label="中文名"/>
    <el-table-column prop="enName" label="英文名"/>
    <el-table-column prop="age" label="年龄"/>
    <el-table-column prop="degree" label="级别"/>
    <el-table-column prop="email" label="email"/>
    <el-table-column prop="address" label="地址"/>
  </el-table>
</template>

<script>
import { getData } from '@/service';

export default {
  name: 'Home',
  created() {
    getData(
      'http://yapi.demo.qunar.com/mock/5226/complex/api/staff',
      null,
      res => (this.tableData = res.data.list),
    );
  },
  data() {
    return {
      tableData: [
        {
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
        },
        {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄',
        },
        {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄',
        },
        {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄',
        },
      ],
    };
  },
  methods: {},
};
</script>
