<template>
  <div class="view-conatiner">
    page1_pc
    <button @click="handleLink('page2_pc')">page2</button>
    <button @click="handleLink('index_pc')">index</button>
  </div>
</template>

<style lang="less" scoped>
@import '../css/ticket.less';
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
