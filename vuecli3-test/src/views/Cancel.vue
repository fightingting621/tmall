<template>
    <div>
        <div class="red">
            请重新输入
        </div>
        警告：{{$route.params.error}}
    </div>

</template>
<script>
    export default {

    };
</script>
<style>
    .red{
        color: red;
    }
</style>