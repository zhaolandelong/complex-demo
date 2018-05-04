<script>
import { getData } from '@/service';
import { degreeMap, staffTableColumnsArr } from '@/const';

export default {
  props: ['data'],
  render(h) {
    return (
      <el-table data={this.data} stripe style="width: 100%">
        {staffTableColumnsArr.map(cl => (
          <el-table-column prop={cl.key} label={cl.label} {...cl.option}>
            {typeof cl.template === 'function' && (
              <template slot-scope={scope}>{cl.template(cl)}</template>
            )}
          </el-table-column>
        ))}
      </el-table>
    );
  },
};
</script>
