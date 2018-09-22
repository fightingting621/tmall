<template>
    <div>
        <h1>{{$store.state.count}}</h1>
        <h1>{{str}}</h1>
        <h1>{{msg}}</h1>
        <h1>{{len}}</h1>
        <!--<h1>{{$store.getters.count100}}</h1>-->
        <h1>{{count100}}</h1>
        <!--<button @click="$store.commit('add',2)">+</button>-->
        <!--<button @click="$store.commit('sub')">-</button>-->
        <!--<button @click="add(2)">+</button>-->
        <button @click="addNum(2)">+</button>
        <button @click="sub">-</button>

        <input type="text" v-model="str">

    </div>
</template>
<script>
    import ComponentB from '@/views/ComponentB.vue';
    import ComponentC from '@/views/ComponentC.vue';
    import {mapState,mapMutations,mapGetters,mapActions} from 'vuex';

    export default {
        data(){
            return{
                str:'我是冯婷婷'

            }
        },
        methods:{
            ...mapActions(['addNum']),
            ...mapMutations(['sub','add'])

        },
        // computed:{
        //     count(){
        //         return this.$store.state.count;
        //     },
        //     msg(){
        //         return this.$store.state.msg;
        //     }
        // }
//         computed:mapState({
// //            count1: state=>{
// //               return state.count++
// //            }
// //            ,
// //            xx: state=>state.msg
// //        })
        // computed:mapState(['count','msg'])
        computed:{
            len(){
                return this.str.length;
            },
            ...mapState(['count','msg']),
            ...mapGetters(['count100'])
        }

    };
</script>
<style>

</style>