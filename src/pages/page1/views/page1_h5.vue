<template>
    <div>
      page1_h5
      <button @click="handleLink('page2_h5')">page2</button>
      <button @click="handleLink('index_h5')">index</button>
    </div>
</template>

<script>
export default {
    name: "h5",
    components:{},
    props:[],
    data(){
          return{}
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
