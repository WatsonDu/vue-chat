<script>
  import {mapState} from 'vuex'
  export default{
      name:'message',
      data(){
        return {
            img:'../../static/1.jpg'
        }
      },
      computed:mapState(['sessions','currentSessionId']),
      filter:{
          time(date){
              if(date){
                  date = new Date(date);
              }
              return `${date.getHours()}:${date.getMinutes()}`;
          }
      },
      directives:{
          'scroll-bottom'(el){
              setTimeout(function(){
                  el.scrollTop+=9999;
              },1)
              }
          }
      }


</script>

<template>
    <div class="message" v-scroll-bottom="sessions">
        <ul v-if="currentSessionId == item.id" v-for="item in sessions">
            <li v-for="entry in item.messages">
                <p class="time">
                    <span>{{entry.date | time}}</span>
                </p>
                <div class="main" :class="{self:entry.self}">
                <img class="avatar" width="30" height="30" :src="entry.self ? img : item.user.img" />
                <div class="text">{{ entry.content }}</div>
                </div>
            </li>
        </ul>
    </div>

</template>

<style lang="less" scoped>
.message {
    padding: 10px 15px;
    overflow-y: scroll;
   ul{
     list-style-type: none;
        li {
            margin-bottom: 15px;
        }
   }
    .time {
        margin: 7px 0;
        text-align: center;
        > span {
            display: inline-block;
            padding: 0 18px;
            font-size: 12px;
            color: #fff;
            border-radius: 2px;
            background-color: #dcdcdc;
        }
    }
    .avatar {
        float: left;
        margin: 0 10px 0 0;
        border-radius: 3px;
    }
    .text {
        display: inline-block;
        position: relative;
        padding: 0 10px;
        max-width: ~'calc(100% - 40px)';
        min-height: 30px;
        line-height: 2.5;
        font-size: 12px;
        text-align: left;
        word-break: break-all;
        background-color: #fafafa;
        border-radius: 4px;
        &:before {
            content: " ";
            position: absolute;
            top: 9px;
            right: 100%;
            border: 6px solid transparent;
            border-right-color: #fafafa;
        }
    }
    .self {
        text-align: right;
        .avatar {
            float: right;
            margin: 0 0 0 10px;
        }
        .text {
            background-color: #b2e281;
            &:before {
                right: inherit;
                left: 100%;
                border-right-color: transparent;
                border-left-color: #b2e281;
            }
        }
    }
}
</style>
