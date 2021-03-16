/*
 * @Author: zhaoye
 * @Date: 2017-01-12 17:32:41
 * @Last Modified by: duantao-ds
 * @Last Modified time: 2018-09-03 16:45:49
 */
/**
 * toast组件
 */
<template>
    <div class="toast-container">
        <transition name="fade" @after-leave="afterLeave">
            <div v-if="isShow && text" class="toast">
                {{text}}
            </div>
        </transition>
    </div>
</template>
<script>
    import Vue from 'vue'
    export default Vue.extend({
            data (){
                return {
                    isShow: false,
                    text: '',
                    duration: 1000,
                    defaultType: 'center'
                }
            },
            mounted () {
                this.$nextTick( () => {
                    this.isShow = true
                    setTimeout(()=>{
                        this.isShow = false;
                    }, this.duration)
                })
            },
            methods: {
                afterLeave () {
                    this.$emit('destroy');
                    this.$destroy();
                }
            },
        })
</script>

<style lang='less'>
    .toast-container {
        position: fixed;
        top: 50%;
        left: 50%;
        height: 1.1rem;
        width: 3.8rem;
        z-index: 99999;
        .toast {
            -webkit-transform: translate(-50%, -50%);
            -moz-transform: translate(-50%, -50%);
            transform: translate(-50%, -50%);
            position: absolute;
            font-size: .3rem;
            padding: .24rem .3rem;
            background-color: rgba(0, 0, 0, 0.8);
            border-radius: .04rem;
            color: #fff;
            text-align: center;
            word-break: break-all;
            line-height: 1.3;
            border-radius:.2rem;
        }
    }
</style>
<style scoped>
    .fade-enter-active {
      transition: all .5s;

    }
    .fade-leave-active {
      transition: all .5s;

    }
    .fade-enter, .fade-leave-active {
        opacity: 0;
    }
    .fade-enter {
        -webkit-transform: translate(-50%, 25%);
        -moz-transform: translate(-50%, 25%);
        transform: translate(-50%, 25%);
        -webkit-transition-timing-function: ease-in;
        -moz-transition-timing-function: ease-in;
        transition-timing-function: ease-in;
    }
    .fade-leave-active {
        -webkit-transform: translate(-50%, -125%);
        -moz-transform: translate(-50%, -125%);
        transform: translate(-50%, -125%);
        -webkit-transition-timing-function: ease-out;
        -moz-transition-timing-function: ease-out;
        transition-timing-function: ease-out;
    }
</style>
