<template>
  <div class="wrapper">
      <navBar class="nav-item">
          <div slot="center">商品分类</div>
      </navBar>
      <div id='content'>
          <Tabmenu 
          :categories='categories' 
          @selectItem='selectItem'
          class="content"></Tabmenu>
          <Scroll id="tab-content">
            <TabContent :categoryData='showCategoryDate'></TabContent>
          </Scroll>
      </div>
  </div>
</template>

<script>
import navBar from '../../components/common/navBar/'
import Scroll from '@/components/common/scroll/Scroll.vue'
import Tabmenu from './childcomponents/Tabmenu'
import TabContent from './childcomponents/TabContent'
import {getCategory,getSubcategory,getCategoryDetail} from '@/network/category'
  export default {
    name: "Category",
    data() {
      return {
        categories:[],
        categoryData:{},
        currentIndex:-1
      }
    },
    components:{
      navBar,
      Scroll,
      Tabmenu,
      TabContent
    },
    created(){
        this.$bus.$on('imgLoad', () => {
		    this.$refs.scroll.refresh()
	    })
      //取出分类的组名
      getCategory().then(res=>{
          this.categories = res.data.category.list
      //获取第一个分类的数据
      this.getcategoryDate(0)
        })
    },
    computed:{
      showCategoryDate(){
        return this.categoryData[this.currentIndex]
      }
    },
    methods: {
      //接受子组件传来的点击索引值
      selectItem(index){
        this.getcategoryDate(index)
      },
      //数据传入
      getcategoryDate(index){
        this.currentIndex=index
        const maitKey=this.categories[index].maitKey
      getSubcategory(maitKey).then(res=>{
             this.categoryData[index]= res.data
             this.categoryData = {...this.categoryData}
        })
      }
    }
  }
</script>

<style scoped>
.wrapper {
  height: 100vh;
  overflow: hidden;
}
.nav-item{
  background-color: pink;
  color: #fff;
}
#content{
  height: calc(100% - 44px - 49px);
  display: flex;
}
#tab-content {
    height: 100%;
    flex: 1;
}

</style>