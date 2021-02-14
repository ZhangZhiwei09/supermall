<template>
  <div class="wrapper" ref="wrapper">
      <div class="content">
        <slot></slot>
      </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll' 
export default {
    name:'Scroll',
    data(){
        return{
            scroll:null
        }
    },
    props:{
        probeType:{
            type:Number,
            default:0
        },
        pullUpLoad:{
            type:Boolean,
            default:false
        }
    },
    mounted(){
        this.scroll=new BScroll(this.$refs.wrapper,{
            probeType:3,
            pullUpLoad:this.pullUpLoad,
            observeDOM:true,
            pullUpLoad:this.probeType,
            click:true
        })
        //监听滚动的位置
        if(this.probeType===2||this.probeType===3){
            this.scroll.on('scroll',(position)=>{
            this.$emit('scroll',position)
        })
        }
        //监听滚定到底部的位置
        if(this.pullUpLoad){
        this.scroll.on('pullingUp',()=>{
            this.$emit('pullingUp')
            console.log("123");
        })
        }
    },
    methods:{
    refresh() {
        this.scroll && this.scroll.refresh()
      },
    getScrollY(){
        return this.scroll?this.scroll.y:0
    }
    }
}
</script>

<style>

</style>