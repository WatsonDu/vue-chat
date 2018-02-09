<script>
    import {actions} from '../store'

    export default {
        vuex:{
            actions:actions,
            getters:{
                user:({user}) => user,
              filterKey:({filterKey}) => filterKey,
            },

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
            <img :src="user.img" :alt="user.name" class="avatar" height="40" width="40">
            <p class="name">{{user.name}}</p>
        </header>
        <footer>
            <input type="text" class="search" placeholder="搜索" @keyup="onKeyup">
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
