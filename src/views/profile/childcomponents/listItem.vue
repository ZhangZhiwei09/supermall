<template>
    <div id="list-item">
        <div class="item">
            <img src="@/assets/img/profile/message.svg" alt="">
            <span>我的信息</span>
        </div>
        <div class="item">
            <img src="@/assets/img/profile/pointer.svg" alt="">
            <span>积分商城</span>
        </div>
        <div class="item">
            <img src="@/assets/img/profile/vip.svg" alt="">
            <span>会员卡</span>
        </div>
        <div class="item">
            <img src="@/assets/img/profile/cart.svg" alt="">
            <span>我的购物车</span>
        </div>
        <div class="item">
            <img src="@/assets/img/profile/shopping.svg" alt="">
            <span>下载购物APP</span>
        </div>
    </div>
</template>

<script>
export default {
    name:'listItem'
}
</script>

<style>
#list-item{
    background-color: #fff;
    font-size: 15px;
    color: #333;
    margin-top: 15px;
}
#list-item img{
    width: 20px;
    height: 20px;
    vertical-align: middle;
}
#list-item .item{
    height: 44px;
    line-height: 44px;
    border-bottom: 1px solid rgba(100, 100, 100, .1);
    padding-left: 15px;
}
</style>