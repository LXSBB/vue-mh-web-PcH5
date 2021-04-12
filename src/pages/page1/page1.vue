<template>
  <div id="page1">
    <router-view></router-view>
  </div>
</template>

<style lang="less" scoped>
</style>

<script>
export default {
  methods: {
    _isMobile() {
      let flag = navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i)
      return flag;
    }
  },
  mounted() {
    if (this._isMobile()) {
      this.$router.replace("/page1_h5")
    } else {
      this.$router.replace("/page1_pc")
    }

  }

};
</script>
