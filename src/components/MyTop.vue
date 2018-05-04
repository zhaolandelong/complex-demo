<template>
  <div class="my-top">
    <p>{{title}}</p>
  </div>
</template>

<script>
export default {
  name: 'MyTop',
  props: ['title'],
  data() {
    return {
    };
  },
  methods: {
  },
};
</script>
<style lang="less">
.my-top{
  font-size: 18px;
  font-weight: bold;
  padding: 10px 0 20px;
}
</style>

