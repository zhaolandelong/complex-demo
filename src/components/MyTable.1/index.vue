<template>
  <div class="my-table">
    <el-table :data="tableData" stripe style="width: 100%">
      <Column v-for="cl in columns" :key="cl.key" :data="cl"/>
    </el-table>
  </div>
</template>

<script>
import Column from './components/Column';

export default {
  name: 'MyTable',
  components: { Column },
  props: ['tableData', 'columns'],
};
</script>
<style lang="less">
.my-table{
}
</style>

