<script>
  import {actions} from '../store';
  export default {
      vuex:{
        actions:actions,
        getters:{
          sessions:({sessions,filterKey}) => {
            let result = sessions.filter(session => session.user.name.includes(filterKey));
            return result;
          },
          currentId:({currentSessionId}) => currentSessionId
        }
      }

  }


</script>
<template>
    <div class="list">
        <ul>
            <li v-for="item in sessions" :class="{active:item.id === currentId}" @click="selectSession(item.id)">
                <img class="avatar" :src="item.user.img" :alt="item.user.name" width="30" height="30">
                <p class="name">{{item.user.name}}</p>
            </li>
        </ul>
    </div>
</template>

<style lang="less" scoped>
    .list{
        li{
            padding:12px 15px;
            border-bottom:1px solid #292c33;
            cursor:pointer;
            transtion:background-color .1s;
        }
        .avatar,.name{
            vertical-align:middle;
        }
        .avatat{
            border-radius:2px;
        }
        .name{
            display:inline-block;
            margin:0 0 0 15px;
        }
    }
</style>
