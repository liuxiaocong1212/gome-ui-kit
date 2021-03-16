/*
 * @Author: zhaoye
 * @Date: 2017-01-12 17:28:14
 * @Last Modified by: zhaoye
 * @Last Modified time: 2017-07-22 21:38:20
 */
<template>
    <transition name='gotop'>
        <i id='gotop' v-show="isShow"  @click='onClick'></i>
    </transition>
</template>
<script>
    import Vue from 'vue';
    import base from '../base.vue';
    export default Vue.extend({
        mixins: [base],
        data () {
            return {
                isShow: false,
            }
        },
        created () {
            this.mountMyself('gotop');
            const scroll = () => {
                if(global.scrollY > global.screen.availHeight){
                    this.isShow = true
                }else{
                    this.isShow = false
                }
                //global.requestAnimationFrame(scroll);
            }
            // global.requestAnimationFrame(scroll);
   		    window.addEventListener('scroll', scroll)
        },
        methods: {
            onClick () {
                const speed =  global.scrollY/10 < 220 ? 220 : global.scrollY/10
                const scrollTop = () => {
                    global.scrollTo(0, global.scrollY - speed)
                    if(global.scrollY > 0)
                         global.requestAnimationFrame(scrollTop)
		   				//window.addEventListener('scroll', scrollTop)
                }
                global.requestAnimationFrame(scrollTop)
		   		//window.addEventListener('scroll', scrollTop)
            }
        }
    })
</script>
<style lang="less">
    @import '../less/var.less';
    @import '../less/layout.less';
    @gotop-width: 1rem;
    @gotop-height: 1rem;

    .gotop-postion() {
        position: fixed;
        bottom: .2rem;
        right: .2rem;
    }
    .gotop-size(){
        width: @gotop-width;
        line-height: @gotop-height;
    }
    #gotop {
        .flexbox();
        .flexbox.center();
        .gotop-postion();
        color: @white;
        z-index: @z-max;
        -webkit-transform: translateZ(0);
        -moz-transform: translateZ(0);
        transform: translateZ(0);
    }
    .gotop-enter-active,
    .gotop-leave-active {
        transition: opacity .3s;
    }
    .gotop-enter {
        opacity: 0;
    }
    .gotop-leave-active {
        opacity: 0;
    }
    #gotop {
        .gotop-size();
        background: url(./images/gotop.png) no-repeat;
        background-size: 100% 100%;
        border-radius: @gotop-height;
        text-align: center;
        line-height: @gotop-height;
        height: @gotop-height;
    }
</style>
