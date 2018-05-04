<template>
  <div>
    <my-top title="员工信息"/>
    <!-- <el-button @click="doDiyChoose">自定义列</el-button> -->
    <my-table :tableData="tableData" :columns="staffTableColumns"/>
    <el-table
      :data="tableData"
      stripe
      style="width: 100%">
      <el-table-column label="性别" width="50">
        <template slot-scope="scope">
          {{scope.row.sex===1?'男':'女'}}
        </template>
      </el-table-column>
      <el-table-column label="学历" width="90">
        <template slot-scope="scope">
          {{degreeMap[scope.row.degree]}}
        </template>
      </el-table-column>
      <el-table-column prop="joinDate" label="入职日期" width="100"/>
      <el-table-column label="联系方式">
        <el-table-column prop="mobile" label="手机" width="110"/>
        <el-table-column prop="email" label="email"/>
        <el-table-column prop="address" label="地址"/>
      </el-table-column>
      <el-table-column label="家乡">
        <el-table-column prop="homeProvince" label="省" width="90"/>
        <el-table-column prop="homeCity" label="市"/>
        <el-table-column prop="homeArea" label="区"/>
      </el-table-column>
      <el-table-column label="工作地点">
        <el-table-column prop="workProvince" label="省" width="90"/>
        <el-table-column prop="workCity" label="市"/>
        <el-table-column prop="workArea" label="区"/>
      </el-table-column>
      <el-table-column prop="isMarry" label="婚否">
        <template slot-scope="scope">
          {{scope.row.isMarry===1?'是':'否'}}
        </template>
      </el-table-column>
    </el-table>
    <diy-choose :visible.sync="isModalShow"/>
  </div>
</template>

<script>
import { getData } from '@/service';
import { degreeMap, staffTableColumns } from '@/const';
import MyTop from '@/components/MyTop';
import MyTable from '@/components/MyTable';
import DiyChoose from './components/DiyChoose';

export default {
  name: 'Home',
  components: {
    DiyChoose,
    MyTop,
    MyTable,
  },
  created() {
    getData(
      'http://yapi.demo.qunar.com/mock/5226/complex/api/staff',
      null,
      ({ data }) => {
        this.tableData = data.list;
      },
    );
  },
  data() {
    return {
      tableData: [],
      isModalShow: false,
      degreeMap,
      staffTableColumns,
    };
  },
  methods: {
    doDiyChoose() {
      this.isModalShow = true;
    },
  },
};
</script>
