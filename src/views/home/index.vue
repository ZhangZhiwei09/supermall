<template>
  <div id="home" class="wrapper">
      <nav-Bar class="home-nav"><div slot="center">购物街</div></nav-Bar>
    <tab-control 
    :titles="['流行','新款','精选']"
    @tabClick="tabClick"
    class="tab-control"
    ref="tabcontrol1"
    v-show="isTabFixed"
    ></tab-control>   
  <Scroll 
  class="content" 
  ref="scroll" 
  :probeType="3" 
  @scroll="contentScroll"
  :pullUpLoad="true"
  @pullingUp='loadMore'> 
    <home-swiper :banners="banners" @swiperimageload='swiperimageload'></home-swiper>
    <recommend-View :recommends='recommends'></recommend-View>
    <future-new></future-new>
    <tab-control 
    :titles="['流行','新款','精选']"
    @tabClick="tabClick"
    class="tab-control"
    ref="tabcontrol2"
    ></tab-control>
    <good-lists :goods="showGoods"></good-lists>
</Scroll>
    <back-top @click.native='btnClick' v-show="showbackTop"></back-top>
  </div> 
</template>

<script>
import navBar from "@/components/common/navBar"
import {getHomeMultidata,getProductData } from '@/network/home'
import recommendView from './recommend'
import futureNew from './futurenew'
import HomeSwiper from './homeSwiper.vue'
import TabControl from '@/components/content/tabControl/TabControl'
import GoodLists from '../../components/content/goods/goodLists.vue'
import Scroll from '../../components/common/scroll/Scroll.vue'
import BackTop from '../../components/content/backTop/BackTop.vue'
import {debounce} from '../../components/common/utils.js'
import {itemListenerMixin} from "@/components/common/mixin";
export default {
  name:'Home',
  data(){
    return{
      banners:[],
      recommends:[],
      goods: {
          'pop': {page: 1, list: []},
          'new': {page: 1, list: []},
          'sell': {page: 1, list: []},
        },
      currentType:'pop',
      showbackTop:false,
      tabOffsetTop:0,
      isTabFixed:false,
      saveY: 0
    }
  },
  mixins:[itemListenerMixin],
  components:{
    navBar,
    recommendView,
    futureNew,
    HomeSwiper,
    TabControl,
    GoodLists,
    Scroll,
    BackTop,
  },
  computed:{
    showGoods(){
      return this.goods[this.currentType].list
    }
  },
  created(){
   this.getHomeMultidata()
   this.getProductData("pop")
   this.getProductData("new")
   this.getProductData("sell")
  },
    activated() {
     this.$refs.scroll.refresh()
    this.$refs.scroll.scroll.scrollTo(0, this.saveY)
    },
    deactivated() {
    this.saveY = this.$refs.scroll.getScrollY()
    },
  mounted(){ },
  methods:{
    getHomeMultidata(){
      getHomeMultidata().then(res=>{
      this.banners=res.data.banner.list
      this.recommends=res.data.recommend.list
    })
    },
    getProductData(type){
          const page =this.goods[type].page
      getProductData(type,page).then(res=>{
          this.goods[type].list.push(...res.data.list)
          this.goods[type].page+=1
          this.$refs.scroll.scroll.finishPullUp()
    })
    },
    tabClick(index){
      switch(index){
        case 0:
        this.currentType='pop'
        break
        case 1:
        this.currentType='new'
        break
         case 2:
        this.currentType='sell'
        break         
      }
      this.$refs.tabcontrol1.currentindex = index;
      this.$refs.tabcontrol2.currentindex = index;

    },
    btnClick(){
      this.$refs.scroll.scroll.scrollTo(0,0,500)
    },
    //判断当前高度让图片是否显示
    contentScroll(position){
      this.showbackTop=(-position.y)>1000
      this.isTabFixed=(-position.y)>this.tabOffsetTop
    },
    loadMore(){
      this.getProductData(this.currentType)
    },
    swiperimageload(){
      this.tabOffsetTop=this.$refs.tabcontrol2.$el.offsetTop
    }
  }
}
</script>

<style scoped>
#home{
  position: relative;
  height: 100vh;
}
.home-nav{
  background-color: pink;
  color: #fff;
}
.tab-control{
  position: sticky;
  top: 0px;
  z-index: 9;
}
.content{
position: absolute;
overflow: hidden;
top: 44px;
bottom: 49px;
left: 0;
right: 0;
}
</style>