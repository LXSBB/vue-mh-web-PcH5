<template>
    <div>
      <head-pc></head-pc>
      <p style='font-size: 20px'>index_pc</p>
      <button @click="handleLink('page1_pc')" style='font-size: 20px'>page1</button>
      <button @click="handleLink('page2_pc')" style='font-size: 20px'>page2</button>
    </div>
</template>

<script>
import HeadPc from '@/components/HeadPc';
export default {
    name: "index_pc",
    components:{ HeadPc  },
    props:[],
    data(){
          return{}
        },
    methods:{
      //页面跳转
      handleLink(name) {
        window.location.href = `/${name}`;
      }
    },
}
</script>
<style scoped type="text/less" lang="less">

</style>
