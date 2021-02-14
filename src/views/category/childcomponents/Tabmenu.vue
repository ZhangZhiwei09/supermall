<template>
  <scroll id="tab-menu">
      <div 
      v-for="(item,index) in categories" 
      :key='index'
      class="menu-list-item"
      :class="{active: index===currentIndex}"
      @click="itemClick(index)">{{item.title}}
      </div>
  </scroll>
</template>

<script>
import Scroll from '../../../components/common/scroll/Scroll.vue'

export default {
    name:'Tabmenu',
    data(){
      return{
        currentIndex: 0
      }
    },
    props:{
      categories:{
        type:Array
    }
    },
    components:{
        Scroll
    },
    methods:{
      itemClick(index){
        this.currentIndex=index
        this.$emit('selectItem', index)
      }
    }

}
</script>

<style scoped>
  #tab-menu {
    height: 100%;
    background-color: #f6f6f6;
    width: 100px;
  }
  .menu-list-item {
    height: 45px;
    line-height: 45px;
    text-align: center;
    font-size: 14px;
  }
  .active{
    font-weight: 700;
    color: red;
    background-color: #fff;
    border-left: 3px solid pink;
  }
 
</style>