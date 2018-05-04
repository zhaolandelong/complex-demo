<template>
  <div>
    <my-top title="员工信息"/>
    <el-button @click="doDiyChoose">自定义列</el-button>
    <my-table :tableData="tableData" :columns="staffTableColumns.filter(stc=>checkedColumns.includes(stc.key))"/>
    <diy-choose :visible.sync="isModalShow" :checkedColumns.sync="checkedColumns"/>
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
      checkedColumns: ['id', 'cnName'],
    };
  },
  methods: {
    doDiyChoose() {
      this.isModalShow = true;
    },
  },
};
</script>
