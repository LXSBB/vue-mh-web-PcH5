<template>
    <div>
      <p style='font-size: 0.2rem'>index_h5</p>
      <button @click="handleLink('page1_h5')" style='font-size: 0.2rem'>page1</button>
      <button @click="handleLink('page2_h5')" style='font-size: 0.2rem'>page2</button>
    </div>
</template>

<script>
export default {
    name: "index_h5",
    components:{},
    props:[],
    data(){
          return{}
        },
  metaInfo(){
    return{
      meta:[
        {
          name:"viewport",
          content:"width=device-width,initial-scale=1,maximum-scale=1,minimum-scale=1,user-scalable=no"
        }
      ]
    }
  },
    methods:{
      handleLink(name) {
        window.location.href = `/${name}`;
      }
    },
}
</script>

<style scoped type="text/scss" lang="scss">

</style>
