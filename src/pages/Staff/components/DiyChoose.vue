<template>
  <el-dialog
  title="提示"
  :visible="visible"
  width="30%"
  :before-close="doCancel">
  <span>这是一段信息</span>
  <span slot="footer" class="dialog-footer">
    <el-button @click="doCancel">取 消</el-button>
    <el-button type="primary" @click="doOk">确 定</el-button>
  </span>
</el-dialog>
</template>

<script>
export default {
  name: 'DiyChoose',
  props: ['visible', 'onOk', 'onCancel'],
  data() {
    return {
      tableData: [],
      isModalShow: false,
    };
  },
  methods: {
    doOk() {
      this.$emit('update:visible', false);
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
