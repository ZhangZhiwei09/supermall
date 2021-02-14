<template>
  <transition name="fade">
    <div class="toast" v-show="isShow">{{message}}</div>
  </transition>
</template>

<script>
	export default {
		name: "Toast",
    data() {
        return {
        isShow: false,
        message: '我是弹窗'
      }
    },
    methods:{
      show(message='默认文字',duration=2000){
        this.isShow=true;
        this.message=message
      setTimeout(()=>{
          this.isShow=false;
          this.message=''
        },duration)
      }
    }
	}
</script>

<style scoped>
  .toast {
    position: fixed;
    left: 50%;
    top: 50%;
    background-color: rgba(0,0,0,.8);
    padding: 10px;
    border-radius: 5px;
    transform: translate(-50%,-50%);
    background-color: black;
    color:#fff;
    z-index: 9999;
  }

  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
  }
  .fade-enter, .fade-leave-to {
    opacity: 0;
  }
</style>