<template>
    <div>
        <div class="green">
            登录成功
        </div>
        登录方式：{{$route.params.style}}
    </div>
</template>
<script>
    export default {

    };
</script>
<style>
    .green{
        color:green;
    }
</style>