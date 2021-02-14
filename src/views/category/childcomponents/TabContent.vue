<template>
<div class="categoryData" v-if="categoryData">
      <div  v-for="(item, index) in categoryData.list" :key="index" class="item-message">
        <a :href="item.link" class="itemdetail">
          <img class="item-img" :src="item.image" alt="">
          <div class="item-text">{{item.title}}</div>
        </a>
      </div>
</div>
</template>
<script>
export default {
    name:'TabConent',
    props:{
      categoryData:{
          type:Object
      }
    },
    created(){
    }
}
</script>

<style scoped>
.categoryData{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
.item-message{
    padding: 10px 0;
}
.item-message .item-text{
   width:50px;
   text-align: center;
   white-space:normal; 
}
.itemdetail img{
  width: 60px;
  height:60px;
}
</style>>
