<template>
        <Swiper>
        <swiper-item v-for="item in banners">
          <a :href="item.link">
              <img :src="item.image" alt="" @load="imageLoad">
          </a>
        </swiper-item>
      </Swiper>
</template>

<script>
import {Swiper,SwiperItem} from '@/components/common/swiper'
export default {
    name:'homeSwiper',
    data(){
        return{
            isLoad:false
        }
    },
    props:{
          banners:{
            type:Array,
            default(){
                return []
            }
        }
    },
    components:{
        Swiper,
        SwiperItem
    },
    methods:{
        imageLoad(){
            if(!this.isLoad){
            this.$emit('swiperimageload')
            this.isLoad=true
            }

        }
    }
}
</script>

<style>

</style>