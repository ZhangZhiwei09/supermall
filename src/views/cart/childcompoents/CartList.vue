<template>
    <div class="cart-list">
      <Scroll class="content" ref='scroll'>
      <CartListItem 
      v-for="(item,index) in getCart" 
      :key='index' 
      :itemInfo='item'></CartListItem>
      </Scroll>
    </div>
</template>

<script>
import CartListItem from './CartListItem'
import Scroll from '@/components/common/scroll/Scroll.vue'
export default {
    name:'cartList',
    components:{
      CartListItem,
      Scroll
    },
  activated(){
      this.$refs.scroll.refresh()
  },
    computed:{
        getCart(){
            return this.$store.state.cartList
        }
     },
     methods:{
      
     }
    
}
</script>
<style scoped>
  .content{
    position: absolute;
    top: 44px;
    left: 0;
    right: 0;
    bottom: 93px;
    overflow: hidden;
  }
</style>