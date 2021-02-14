<template>
  <div id='detail'>
      <navBar class='nav-item'  ref="nav" > 
          <div slot="left" class="backicon"  @click="backClick">
              <img src="@/assets/img/common/back.svg" alt="">
          </div>
          <div slot="center" class="title">
              <div 
              v-for="(item,index) in titles" 
              class="title-item" 
              :class="{active:index===currentIndex}"
              @click="itemClick(index)">
              {{item}}
            </div>
        </div>
      </navBar>
    <Scroll class="content" 
    ref="scroll" 
    :probeType='3' 
    @scroll="contentScroll">
      <detailswiper :topImages='topImages' ></detailswiper>
      <detailBaseInfo :goods='goods'></detailBaseInfo>
      <detailShopInfo :shop='shop'></detailShopInfo>
      <detail-goods-info 
      :detailInfo='detailInfo'
      @imageLoad='imageLoad'
      ></detail-goods-info>
      <DetailParamsInfo :paramInfo='paramInfo'ref='params'></DetailParamsInfo>
      <DetailCommentInfo :commentInfo='commentInfo' ref='comment'> </DetailCommentInfo>
      <good-lists :goods='recommendInfo' ref='recommend'></good-lists>
    </Scroll>
    <back-top @click.native='btnClick' v-show="showbackTop"></back-top>
    <detail-bottom-bar @addToCart='addToCart'></detail-bottom-bar>
  </div>
</template>

<script>
import navBar from '../../components/common/navBar/'
import {getDetailData,Goods,Shop,GoodsParam,getRecommend} from '../../network/detail'
import Detailswiper from './childcomponents/Detailswiper'
import detailBaseInfo from './childcomponents/DetailBaseInfo'
import detailShopInfo from './childcomponents/DetailShopInfo'
import DetailGoodsInfo from './childcomponents/DetailGoodsInfo'
import Scroll from '../../components/common/scroll/Scroll.vue'
import DetailParamsInfo  from './childcomponents/DetailParamInfo.vue'
import DetailCommentInfo  from './childcomponents/DetailCommentInfo.vue'
import GoodLists from '../../components/content/goods/goodLists.vue'
import {itemListenerMixin,backTopMixin} from "@/components/common/mixin";
import {debounce} from '../../components/common/utils.js'
import DetailBottomBar from './childcomponents/DetailBottomBar.vue'
import BackTop from '../../components/content/backTop/BackTop.vue'
import {mapActions} from 'vuex'
export default {
  components: {
       navBar,
       Detailswiper, 
       Detailswiper,
       detailBaseInfo,
       detailShopInfo, 
       DetailGoodsInfo,
       Scroll,
       DetailParamsInfo,
       DetailCommentInfo,
       GoodLists,
       DetailBottomBar,
       BackTop,
       },
    name:'Detail',
    data(){
        return{
            iid:null,
            titles:['商品','参数','评论','推荐'],
            currentIndex:0,
            topImages:[],
            goods:{},
            shop:{},
            detailInfo:{},
            paramInfo:{},
            commentInfo:{},
            recommendInfo:[],
            topthemes:null,
            showbackTop:false,
        }
    },
    mixins:[itemListenerMixin,backTopMixin],
        created(){
        this.imageLoad
        this.iid=this.$route.params.iid
        getDetailData(this.iid).then(res=>{
            const data=res.result
            this.topImages=res.result.itemInfo.topImages
            this.goods=new Goods(data.itemInfo,data.columns,data.shopInfo.services)
            this.shop=new Shop(data.shopInfo)
            this.detailInfo=data.detailInfo
            this.paramInfo=new GoodsParam(data.itemParams.info,data.itemParams.rule)
             if (data.rate.cRate!==0) {
		        this.commentInfo = data.rate.list[0];
            }
        getRecommend().then(res=>{
            this.recommendInfo=res.data.list
            })
        this.topthemes=debounce(()=>{
            this.topthemes=[],
            this.topthemes.push(0)
            this.topthemes.push(this.$refs.params.$el.offsetTop)
            this.topthemes.push(this.$refs.comment.$el.offsetTop)
            this.topthemes.push(this.$refs.recommend.$el.offsetTop)
            },200)
        })

    },
    methods:{
        ...mapActions(['addCart']),
        itemClick(index){
            this.$refs.scroll.refresh()
            this.currentIndex=index
            this.$refs.scroll.scroll.scrollTo(0,-this.topthemes[index],200)
        },
        //返回上一级
        backClick(){
            this.$router.go(-1)
        },
        imageLoad(){
            this.$refs.scroll.refresh()
            this.topthemes()
        },
        contentScroll(position){
            this.showbackTop=(-position.y)>1000
            const positionY=position.y
            let length=this.topthemes.length
            for(let i=0;i<length;i++){
                if((i<length-1&&-positionY>=this.topthemes[i]
                &&-positionY<this.topthemes[i+1])||(i===length-1&&-positionY>=this.topthemes[i])){
                        this.currentIndex=i;
                }
            }
        },
        btnClick(){
        this.$refs.scroll.scroll.scrollTo(0,0,500)
      },
        addToCart(){
            const commodity ={}
             commodity.image=this.topImages[0];
             commodity.title=this.goods.title;
             commodity.desc=this.goods.desc;
             commodity.price=this.goods.newPrice;
             commodity.iid=this.iid;

             this.addCart(commodity).then(res=>{
                 this.$toast.show(res,2000)
             })
        }
    }
}
</script>

<style scoped>
.title{
    display: flex;
}
.title-item{
    flex: 1;
}
.active{
    color: red;
}
.backicon{
    margin-top: 8px;
}
#detail{
    position: relative;
    z-index: 9999;
    background-color: #fff;
    height: 100vh;
}
.nav-item{
    position: relative;
    background-color: #fff;
    width: 100%;
    z-index: 9999;
}
.content{
    height: calc(100% - 44px - 49px)
}
</style>>
