<script>
export default {
  name: "MyTable",
  props: ["tableData", "columns"],
  data() {
    return {};
  },
  methods: {},
  render(h) {
    const vm = this;
    return (
      <div class="my-table">
        <el-table data={vm.tableData} stripe style="width: 100%">
          {vm.columns.map(cl => (
            <el-table-column
              key={cl.key}
              prop={cl.key}
              label={cl.label}
              fixed={cl.fixed}
              width={cl.width}
            >
              {scope.row}
            </el-table-column>
          ))}
        </el-table>
      </div>
    );
  }
};
</script>
<style lang="less">
.my-table {
}
</style>

