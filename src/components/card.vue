<script>

    export default {
        name:'card',
        data(){
            return{
                user:{
                    name:'watsonDu',
                    img:'../assets/1.jpg'
                }
            }
        },

        methods:{
            onKeyup(e){
                this.search(e.target.value);
            }
        }
    }
</script>
<template>
    <div class="card">
        <header>
            <img :src="user.img" alt="" class="avatar">
            <p class="name">{{user.name}}</p>
        </header>
        <footer>
            <input type="text" class="search" placeholder="搜索" v-model="$store.state.filterKey">
        </footer>
    </div>
</template>

<style scoped lang="less" >
    .card{
        padding:12px;
        border-bottom:1px solid #24272c;

        fotter{
            margin-top:12px;
        }

        .avatar, .name{
            vertical-align:middle;
        }

        .avatar{
            border-radius:2px;
          width:40px;
          height:40px;
        }

        .name{
            font-size:16px;
            margin:0 0 0 15px;
            display:inline-block;
        }

        .search{
            padding:0 10px;
            width:100%;
            font-size: 12px;
            color: #fff;
            height: 30px;
            line-height: 30px;
            border: solid 1px #3a3a3a;
            border-radius: 4px;
            outline: none;
            background-color: #26292E;
        }
    }
</style>
