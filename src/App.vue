<template>
  <div id="app">
     <div class="left">
       <card></card>
       <list></list>
     </div>
     <div class="right">
       <message></message>
       <test></test>
     </div>
  </div>
</template>

<script>

import Message from './components/message'
import Card from './components/card'
import List from './components/list'
import Test from './components/test'


export default {
  name:'App',
  data(){
      return {}
  },
  components: {
    Message,Card,List,Test
  },
  mounted:function(){
      this.$store.dispatch('initData')
  }
}
</script>

<style lang="less" scoped>
#app {
  margin:20px auto;
  width:800px;
  height:600px;
}
.left, .right{
  height:100%;
}
.left{
  float:left;
  width:200px;
  color:#f4f4f4;
  background-color:#2e3238;
}
.right{
  position:relative;
  background-color:#eee;
  overflow:hidden;
}
.test{
  position:absolute;
  width:100%;
  bottom:0;
  left:0;
}
.message{
  height:~'calc(100%-160px)';
}
</style>
