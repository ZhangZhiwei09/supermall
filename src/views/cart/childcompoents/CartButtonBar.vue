<template>
  <div class="bottom-menu">
    <CheckButton class="select-all" 
    @click.native="checkBtnClick" 
    :isChecked="isSelectAll"></CheckButton>
    <span>全选</span>
    <span class="total-price">合计: ¥{{totalPrice}}</span>
    <span class="buy-product" @click="calcClick">去计算({{checkLength}})</span>
  </div>
</template>

<script>
  import CheckButton from './CheckButton'
  import { mapGetters } from 'vuex'

	export default {
    name: "BottomBar",
    components: {
		  CheckButton
    },
    computed: {
	totalPrice() {
        const cartList=this.$store.state.cartList
           return cartList.filter(item=>{
               return item.checked
           }).reduce((preValue,item)=>{
      //这里发现返回的价格是带￥符号，并且是字符串的形式，于是就截取字符串并转化为整数类型，不然无法计算
               return preValue + parseFloat(item.price.substring(1)) * item.count
           },0).toFixed(2)
      },
      checkLength(){
        //选中状态下的item的长度
          return this.$store.state.cartList.filter(item=>item.checked).length
      },
      isSelectAll() {
        //未选中状态下
        if(this.$store.state.cartList.length===0) return false
       //选中状态下，判断未选中商品的长度，若有取反返回false
        return !(this.$store.state.cartList.filter(item=>!item.checked).length)
      }
    },
    methods: {
      checkBtnClick() {
        // 有未选中的内容, 则全部选中
        if (this.isSelectAll) {
          this.$store.state.cartList.forEach(item => item.checked = false)
        } else {
          this.$store.state.cartList.forEach(item => item.checked = true)
        }
      },
      calcClick(){
        //toast显示
        if(!this.isSelectAll){
          this.$toast.show('请选择购买的商品',2000)
        }
      }
    }
	}
</script>

<style scoped>
  .bottom-menu {
    width: 100%;
    height: 44px;
    background-color: #eee;
    position: fixed;
    bottom: 49px;
    left: 0;
    box-shadow: 0 -2px 3px rgba(0, 0, 0, .2);
    font-size: 14px;
    color: #888;
    line-height: 44px;
    padding-left: 35px;
    box-sizing: border-box;
  }

  .bottom-menu .select-all {
    position: absolute;
    line-height: 0;
    left: 12px;
    top: 13px;
  }

  .bottom-menu .total-price {
    margin-left: 15px;
    font-size: 16px;
    color: #666;
  }

  .bottom-menu .buy-product {
    background-color: orangered;
    color: #fff;
    width: 100px;
    height: 44px;
    text-align: center;
    line-height: 44px;
    float: right;
  }
</style>
