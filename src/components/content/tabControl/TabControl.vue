<template>
  <div class="tab-control">
      <div v-for="(item,index) in titles" 
      class='tab-control-item' 
      :class="{active:index==currentindex}"
      @click=itemClick(index)>
          <span>{{item}}</span>
      </div>
  </div>
</template>

<script>
export default {
    name:'TabControl',
    data(){
        return{
            currentindex:0
        }
    },
    props:{
        titles:{
            type:Array,
            default(){
                return []
            }
        }
    },
    methods:{
        itemClick(index){
            this.currentindex=index
            this.$emit('tabClick',index)
        }
    }
}
</script>

<style scoped>
.tab-control{
    display: flex;
    text-align: center;
    font-size: 14px;
    height: 40px;
    line-height: 40px;
    background-color: #fff;
    top: 0;
    z-index: 888;
}
.tab-control-item{
flex: 1;
}
.tab-control-item span {
padding: 5px;
}
.active {
color: var(--color-high-text);
}
.tab-control-item.active span {
border-bottom: 2px solid var(--color-high-text);
}
</style>