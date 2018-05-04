<template functional>
  <el-table-column
    :prop="data.key"
    :label="data.label"
    :key="data.key"
    :fixed="data.fixed"
    :width="data.width">
    <!-- <column v-if="data.children && data.children.length"/> -->
    <template slot-scope="scope">
      <template v-if="typeof data.render === 'function'">{{data.render(scope.row)}}</template>
      <template v-else>{{scope.row[data.key]}}</template>
    </template>
  </el-table-column>
</template>
<script>
export default {
  name: 'Column',
  props: ['data'],
};
</script>
