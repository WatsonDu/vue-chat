<script>
  import {mapState} from 'vuex'
  export default{
     name:'test',
    data(){
          return{
              content:''
          };
    },
    methods: {
      addMessage (e) {
        if (e.ctrlKey && e.keyCode === 13 && this.content.length) {
          this.$store.commit('addMessage', this.content);
          this.content = '';
        }
      }
    }
  }
</script>

<template>
    <div class="test">
        <textarea placeholder="按 Ctrl + Enter 发送" v-model="content" @keyup="addMessage"></textarea>
    </div>
</template>

<style lang="less" scoped>
    .test{
        height:160px;
        border-top:1px solid #ddd;

        textarea{
            padding:10px;
            height:100%;
            width:100%;
            border:none;
            outline:none;
            resize:none;
        }
    }

</style>
