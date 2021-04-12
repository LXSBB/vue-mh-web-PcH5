<template>
  <div class="view-conatiner">
    page2_pc
    <button @click="handleLink('page1_pc')">page1</button>
    <button @click="handleLink('index_pc')">index</button>
  </div>
</template>

<style lang="less" scoped>
@import '../css/page2.less';
</style>

<script>
import qs from 'qs';
export default {
  data() {
    return {
      urlParams: ''
    };
  },
  methods:{
    handleLink(name) {
      window.location.href = `/${name}`;
    }

  },
  mounted() {
  }
};
</script>
