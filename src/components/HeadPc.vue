<template>
    <div class='headContainer'>
      <div class='content'>
        <img src='../assets/img/logo.png' alt='' class='headLogo'>
        <div class='headTitle'>
          <span>英国</span>
          <span>新加坡</span>
          <span>澳洲</span>
          <span>中国香港</span>
          <span>欧洲北美</span>
          <span>曼汉师资</span>
          <span>Offer战绩榜单</span>
          <span>关于我们</span>
        </div>
        <div class='headTelephone'>

        </div>
      </div>
    </div>
</template>

<script>
export default {
    name: "HeadPc",
    components:{},
    props:[],
    data(){
          return{}
        },
    methods:{

    },
}
</script>

<style scoped lang="less" type="text/less">
  .headContainer{
    height: 100px;
    width: 100%;
    position: relative;
    .content{
      width: 100%;
      margin-left:160px ;
      display: flex;
      flex-direction: row;
      align-items: center;
      position: absolute;
      top: 50%;
      transform: translate(0, -50%);
      .headLogo{
        width: 330px;
        height: 47px;
      }
      .headTitle{
        margin-left:68px ;
        border: 1px solid blue;
        display: flex;
        flex-direction: row;
        align-items: center;
        span{
          display: inline-block;
          height: 22px;
          font-size: 16px;
          font-family: PingFangSC-Regular, PingFang SC,serif;
          font-weight: 400;
          color: #575D6A;
          line-height: 22px;
        }
        span:not(:first-child) {
          margin-left:39px
        }
        span:hover{
          height: 28px;
          font-size: 20px;
          font-family: PingFangSC-Medium, PingFang SC,serif;
          font-weight: 500;
          color: #8071F6;
          line-height: 28px;
        }
      }
    }
  }
</style>
