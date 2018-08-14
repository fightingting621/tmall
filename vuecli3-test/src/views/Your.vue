<template>
    <div>
        <h4 class="h1">
            <br>
            用户名：<input type="text">
            <br>
            密 码 ： <input type="password">
            <br>
        </h4>
        <button>
            <router-link to="/your/login">Login</router-link>
        </button>
        <button>
            <router-link to="/your/cancel">Cancel</router-link>
        </button>
        <br>
        <router-view></router-view>
        <!--<router-link :to="{name:'common',params:{style:'普通登录'}}">显示</router-link>-->
        <router-link to="/your/login/普通登录">显示</router-link>&nbsp
        <router-link to="/your/cancel/密码或用户名错误">帮助</router-link>&nbsp
        <router-link to="/your/cancel/请退出页面">严重警告</router-link>&nbsp
        <router-link to="/your/warning/立即退出这个页面">警告别名</router-link>&nbsp
        <router-link to="/home">回到主页</router-link>

    </div>
</template>
<script>
    export default {

    };
</script>
<style>
    .h1{
        color: coral;
    }
    button{
        color: #000;
    }
</style>
