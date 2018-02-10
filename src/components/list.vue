<script>
  import {mapState} from 'vuex';
  export default {
      name:'list',
      data(){
          return {}
      },
      computed:mapState(['sessions','currentSessionId']),
      methods:{
          changeCurrentSessionId(id){
              this.$store.commit('changeCurrentSessionId',id)
          }
      }
  }


</script>
<template>
    <div class="list">
        <ul>
            <li v-for="item in sessions" :class="{active:item.id === currentSessionId}" @click="changeCurrentSessionId(item.id)">
                <img class="avatar" :src="item.user.img" alt="" width="30" height="30">
                <p class="name">{{item.user.name}}</p>
            </li>
        </ul>
    </div>
</template>

<style lang="less" scoped>
    .list{
    ul{
      list-style-type: none;
    }
        li{
            padding:12px 15px;
            border-bottom:1px solid #292c33;
            cursor:pointer;
            transtion:background-color .1s;
        }
        .avatar,.name{
            vertical-align:middle;
        }
        .avatar{
            border-radius:2px;
        }
        .name{
            display:inline-block;
            margin:0 0 0 15px;
        }
    }
</style>
