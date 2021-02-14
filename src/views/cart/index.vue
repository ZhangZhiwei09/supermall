<template>
<div>
 <navBar class="nav-bar"><div slot="center">购物车({{CartLength}})</div></navBar>
    <CartList></CartList>
    <CartButtonBar></CartButtonBar>
 </div>
</template>
<script>
import navBar from "@/components/common/navBar"
import CartList from './childcompoents/CartList'
import CartButtonBar from './childcompoents/CartButtonBar'
export default {
  name:'cart',
  components:{
    navBar,
    CartList,
    CartButtonBar
  },
  computed:{
    CartLength(){
      return this.$store.state.cartList.length
    }
  }
}
</script>

<style scoped>
  .nav-bar {
    background-color: pink;
    color: #fff;
    font-weight: 700;
  }
  .wrapper{
    height: 100vh;
  }

</style>
