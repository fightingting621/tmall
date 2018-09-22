<template>
    <div>
        <h1>我是一个ComponentA组件</h1>
        <component-b :msg="msg"></component-b>
        <component-c @xx="fn"></component-c>
        {{msg}}
    </div>

</template>
<script>
    import ComponentB from '@/views/ComponentB.vue';
    import ComponentC from '@/views/ComponentC.vue';
    export default {
        data(){
          return{
              msg:0
          }
        },
        components:{
            ComponentB,
            ComponentC
        },
        methods:{
            fn(a){
                this.msg+=a;
                console.log(this.msg);
            }
        }

    };
</script>
<style>
    .red{
        color: red;
    }
</style>