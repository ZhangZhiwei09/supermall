<template>
    <div>
      <div class="icon-selector" >
        <img src="@/assets/img/cart/tick.svg" :class="{'selector-active': isChecked}"  alt="">
      </div>
    </div>
</template>

<script>
	export default {
		name: "CheckButton",
    props: {
		isChecked: {
		type: Boolean,
        default: true
      }
    },
    data() {
        return{

        }
    },
    methods: {
    
    },
    watch: {
	
    }
	}
</script>

<style scoped>
  .icon-selector {
    position: relative;
    margin: 0;
    width: 18px;
    height: 18px;
    border-radius: 50%;
    border: 2px solid #ccc;
    cursor: pointer;
  }

  .selector-active {
    background-color: #ff8198;
    border-color: #ff8198;
  }
</style>

