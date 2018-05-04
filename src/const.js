export const degreeMap = [
  '初中以下',
  '初中',
  '高中/中专',
  '大专',
  '本科',
  '研究生',
  '博士',
  '博士以上',
];

export const staffTableColumns = [
  {
    key: 'id',
    label: '工号',
    fixed: true,
  }, {
    key: 'cnName',
    label: '中文名',
    fixed: true,
  }, {
    key: 'enName',
    label: '英文名',
  }, {
    key: 'sex',
    label: '性别',
    width: 50,
    render(row) {
      return row.sex === 1 ? '男' : '女';
    },
  }, {
    key: 'age',
    label: '年龄',
    width: 50,
  }, {
    key: 'birth',
    label: '生日',
    width: 100,
  }, {
    key: 'degree',
    label: '学历',
    width: 90,
  }, {
    key: 'joinDate',
    label: '入职日期',
    width: 100,
  }, {
    key: 'mobile',
    label: '手机',
    width: 110,
  }, {
    key: 'email',
    label: '邮箱',
  }, {
    key: 'address',
    label: '地址',
  }, {
    key: 'isMarry',
    label: '婚否',
    width: 50,
  }, {
    key: 'salary',
    label: '薪资',
  },
];
