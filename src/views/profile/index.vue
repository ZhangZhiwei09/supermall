<template>
  <div>
    <navBar class="nav-item">
      <div slot="center">我的信息</div>
    </navBar>
      <UserInfo></UserInfo>
      <AccountInfo></AccountInfo>
      <listItem></listItem>
  </div>
  
</template>
<script>
import navBar from '../../components/common/navBar/'
import UserInfo from './childcomponents/userInfo'
import AccountInfo from './childcomponents/AccountInfo'
import listItem from './childcomponents/listItem'
export default {
  name:'profile',
  data(){
    return{

    }
  },
  components:{
  navBar,
  UserInfo,
  AccountInfo,
  listItem
  }
}
</script>

<style scoped>
.nav-item{
    background-color: pink;
    color: #fff;
}
</style>