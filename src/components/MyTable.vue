<template>
  <div class="my-table">
    <el-table :data="tableData" stripe style="width: 100%">
      <el-table-column
        v-for="cl in columns"
        :prop="cl.key"
        :label="cl.label"
        :key="cl.key"
        :fixed="cl.fixed"
        :width="cl.width">
        <template slot-scope="scope">
          <template v-if="typeof cl.render === 'function'">{{cl.render(scope.row)}}</template>
          <template v-else>{{scope.row[cl.key]}}</template>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: 'MyTable',
  props: ['tableData', 'columns'],
  data() {
    return {
    };
  },
  methods: {
  },
};
</script>
<style lang="less">
.my-table{
}
</style>

