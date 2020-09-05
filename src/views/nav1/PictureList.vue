<template>
  <el-carousel indicator-position="outside" height="635px">
    <el-carousel-item v-for="item in imgList" :key="item.id">
      <img style="width:100%;height:100%" :src="item.idView"></img>
    </el-carousel-item>
  </el-carousel>
</template>

<script>
export default {
    data() {
      return {
        imgList: [
            {id: 4, idView: require('../../assets/img/bomi/4.jpg')},
            {id: 5, idView: require('../../assets/img/bomi/5.jpg')},
            {id: 7, idView: require('../../assets/img/bomi/7.jpg')},
            {id: 8, idView: require('../../assets/img/bomi/8.jpg')},
            {id: 10, idView: require('../../assets/img/bomi/10.jpg')},
            {id: 11, idView: require('../../assets/img/bomi/11.jpg')},
            {id: 12, idView: require('../../assets/img/bomi/12.jpg')},
            ]   
        }
    },
     methods: {
       imgUpload() {
        this.$nextTick(function() {
        // 获取窗口宽度*图片的比例，定义页面初始的轮播图高度
        this.imgHeight = document.body.clientWidth*1/4
      });
       }
  }
}
</script>
