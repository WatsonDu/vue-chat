import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);
const now = new Date();
const store = new Vuex.Store({
  state:{
    //会话列表
    sessions:[
      {
        id:1,
        user:{
          name:'示例介绍',
          img:'../src/assets/2.jpg'
        },
        messages:[
          {
            content:'Hello，这是一个基于Vue + Vuex + webpack 构建的简单的chat应用',
            date:now,
          },
          {
            content:'项目地址在GitHub',
            date:now,
          }
        ]
      },
      {
        id:2,
        user:{
          name:'dog',
          img:'../src/assets/3.jpg'
        },
        messages:[]
      },
      {
        id:3,
        user:{
          name:'Cat',
          img:'../src/assets/4.jpg'
        },
        messages:[]
      }
    ],
    //当前选择的会话
    currentSessionId:1,
    //过滤只包含这个KEY的会话
    filterKey:'',
  },
  getters:{},
  mutations:{
    changeCurrentSessionId(state,id){
      state.currentSessionId = id
    },
    addMessage(state,message){
      state.sessions[state.currentSessionId-1].messages.push({
        content:message,
        date:new Date(),
        self:true,
      })
    },
    INIT_DATA(state){
      let data = localStorage.getItem('vue-chat-session');
      if(data){
        state.sessions = JSON.parse(data);
      }
    }},

    actions:{
      initData(context){
        context.commit('INIT_DATA')
      }
    },


  });
  store.watch(
  function(state){
     return state.sessions
  },
  function(val){
    localStorage.setItem('vue-chat-session',JSON.stringify(val));
  },
  {
    deep:true,
  }
)
export default store;


