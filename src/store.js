import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);
const now = new Date();
const store = new Vuex.Store({
  state:{
    //当前用户
    user:{
      name:'wang',
      img:'dist/images/1.jpg'
    },
    //会话列表
    sessions:[
      {
        id:1,
        user:{
          name:'示例介绍',
          img:'dist/images/2.jpg'
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
          img:'dist/images/3.jpg'
        },
        messages:[]
      },
      {
        id:3,
        user:{
          name:'Cat',
          img:'dist/images/4.jpg'
        },
        messages:[]
      }
    ],
    //当前选择的会话
    currentSessionId:1,
    //过滤只包含这个KEY的会话
    filterKey:'',
  },
  mutations:{
    INIT_DATA(state){
      let data = localStorage.getItem('vue-chat-session');
      if(data){
        state.sessions = JSON.parse(data);
      }
    },
    //发送消息
    SEND_MESSAGE({sessions,currentSessionId},content){
      let session = sessions.find(item => item.id === currentSessionId);
      session.messages.push({
        content:content,
        date: new Date(),
        self:true,
      });
    },
    //选择会话
    SELECT_SESSION(state,id){
      state.currentSessionId = id;
    },
    //搜索
    SET_FILTER_KEY(state,value){
      state.filterKey = value;
    },
  }
});
store.watch(
  (state) => state.sessions,
  (val) => {
    localStorage.setItem('vue-chat-session',JSON.stringify(val));
  },
  {
    deep:true,
  }
);
export default store;
export const actions = {
  initData:({dispatch}) => dispatch('INIT_DATA'),
  sendMessage:({dispatch},content) => dispatch('SEND_MESSAGE',content),
  selectSession:({dispatch},id) => dispatch('SELECT_SESSION',id),
  search:({dispatch},value) => dispatch('SET_FILTER_KEY',value),
};

