<template>
  <el-dialog
    title="提示"
    :visible="visible"
    width="30%"
    :before-close="doCancel">
    <el-checkbox :indeterminate="isIndeterminate" v-model="checkAll" @change="doCheckAllChange">全选</el-checkbox>
    <div style="margin: 15px 0;"></div>
    <el-checkbox-group v-model="result" @change="doCheckedCitiesChange">
      <el-checkbox v-for="cl in columns" :label="cl.key" :key="cl.key">{{cl.label}}</el-checkbox>
    </el-checkbox-group>
    <span slot="footer" class="dialog-footer">
      <el-button @click="doCancel">取 消</el-button>
      <el-button type="primary" @click="doOk">确 定</el-button>
    </span>
  </el-dialog>
</template>

<script>
import { staffTableColumns } from '@/const';

export default {
  name: 'DiyChoose',
  props: ['visible', 'onOk', 'onCancel', 'checkedColumns'],
  data() {
    return {
      checkAll: false,
      result: this.checkedColumns,
      columns: staffTableColumns,
      isIndeterminate: true,
      staffTableColumns,
      isModalShow: false,
    };
  },
  methods: {
    doCheckedCitiesChange(value) {
      const checkedCount = value.length;
      const allCount = this.columns.length;
      this.checkAll = checkedCount === allCount;
      this.isIndeterminate = checkedCount > 0 && checkedCount < allCount;
    },
    doCheckAllChange(val) {
      this.result = val ? staffTableColumns.map(cl => cl.key) : [];
      this.isIndeterminate = false;
    },
    doOk() {
      this.$emit('update:visible', false);
      this.$emit('update:checkedColumns', this.result);
    },
    doCancel(done) {
      this.$emit('update:visible', false);
      if (typeof done === 'function') {
        done();
      }
    },
  },
};
</script>
