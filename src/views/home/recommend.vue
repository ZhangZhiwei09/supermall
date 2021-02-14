<template>
  <div class="recommends">
      <div v-for="item in recommends" class="recommend-item">
          <a :href="item.link">
              <img :src="item.image" alt="">
              <div>{{item.title}}</div>
          </a>
      </div>
  </div>
</template>

<script>
export default {
    name:'recommendView',
    props:{
        recommends:{
            type:Array,
            default(){
                return []
            }
        }
    }
}
</script>

<style>
.recommends{
    display: flex;
    width: 100%;
    padding-bottom: 30px;
    border-bottom: 10px solid #eee;
    margin-top: 10px;
}
.recommend-item{
    flex: 1;
    text-align: center;
}
.recommend-item img{
    width: 65px;
    height: 65px;
    margin-bottom: 10px;
}
</style>