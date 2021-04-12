<template>
  <div class="view-conatiner">
    page2_h5
    <button @click="handleLink('page1_h5')">page1</button>
    <button @click="handleLink('index_h5')">index</button>
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
