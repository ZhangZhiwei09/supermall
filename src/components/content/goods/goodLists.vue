<template>
<div class="goods-list">
  <good-items 
  v-for="item in goods" 
  :goodsitem="item"
   class="item"></good-items>
</div>
</template>

<script>
import goodItems from './goodItems.vue'

export default {
  components: { goodItems },
    name:'goodList',
    props:{
        goods:{
            type:Array,
            default(){
                return []
            }
        }
    }
}
</script>

<style>
.goods-list {
display: flex;
flex-wrap: wrap;
padding: 5px;
justify-content: space-around;
}

.goods-list .item {
    width: 48%;
  }
</style>