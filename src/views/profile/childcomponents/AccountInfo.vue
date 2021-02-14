<template>
  <div class="account">
    <div class="account-item">
      <div class="number">
        <span class="balance">0.00</span>元
      </div>
      <div class="account-info">我的余额</div>
    </div>
    <div class="account-item">
      <div class="number">
        <span class="balance">0</span>个
      </div>
      <div class="account-info">我的优惠</div>
    </div>
    <div class="account-item">
      <div class="number">
        <span class="balance">0</span>分
      </div>
      <div class="account-info">我的积分</div>
    </div>
  </div>
</template>

<script>
export default {
    name: "AccountInfo"
}
</script>

<style scoped>
.account{
    display: flex;
    border-bottom: 5px solid rgba(100, 100, 100, .1);

}
.account .balance{
    font-size: 20px;
    font-weight: 700;
    color: red;
}
.account-item{
    width: 100%;
    text-align: center;
    font-size: 13px;
    padding: 18px;
}
.account-info{
    margin-top: 6px;
}
</style>