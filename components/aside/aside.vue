/*
 * @Author: zhaoye 
 * @Date: 2017-01-12 17:25:56 
 * @Last Modified by: zhaoye
 * @Last Modified time: 2017-11-06 16:54:38
 */
<template>

<transition v-if="!$router || dontRoute" name="aside">
    <div class="aside-container"  v-show="isShow">
        <div class="bg" @click="out(true)" @touchmove="out2(true)"></div>
        <aside  :class="[direction ||'right', position ? ('size-' + position) : 'size-90']">
            <slot></slot>
        </aside>
    </div>
</transition>
<div v-else class="aside-container">
        <div class="bg" @click="out(true)" @touchmove="out2(true)"></div>
        <aside  :class="[direction ||'right', position ? ('size-' + position) : 'size-90']">
            <slot></slot>
        </aside>
    </div>
</template>
<script>
    import Vue from 'vue';
    import scroller from '../scroller/scroller.vue';
    import eventbus from 'gome-utils-eventbus';
    export default Vue.extend({
        props: ['direction', 'position', 'dontRoute','bgIsClick'],
        components: {
            scroller
        },
        data () {
            return {
                touched: false,
                isShow: false
            }
        },
        methods: {
             //组件展开时加载懒加载
            layzload(){                
                eventbus.emitDOM('scroll')
                setTimeout(()=>{
                    eventbus.emitDOM('scroll')
                },100)
                setTimeout(()=>{
                    eventbus.emitDOM('scroll')
                },200)
                setTimeout(()=>{
                    eventbus.emitDOM('scroll')
                },300)
                setTimeout(()=>{
                    eventbus.emitDOM('scroll')
                },400)
                setTimeout(()=>{
                    eventbus.emitDOM('scroll')
                },600)
                setTimeout(()=>{
                    eventbus.emitDOM('scroll')
                },800)
            },
            in () {
                this.layzload();
                this.isShow = true
                this.$emit('in')
                eventbus.emit('asliderIn', this)
            },
            out (fromMyself) {
                if(this.bgIsClick && fromMyself){//判断背景是否可点击
                    return;
                }else{
                    if(this.$router && !this.dontRoute){
                        this.$router.back();
                    }else{
                        this.isShow = false;
                        this.$emit('out')
                        eventbus.emit('asliderOut', this)
                    }
                }
                
            },
            out2 (fromMyself) {
                if(this.bgIsClick  && fromMyself){//判断背景是否可点击
                    return;
                }else{
                    if(!this.touched){
                        this.out();
                        this.touched = true;
                    }
                }
                
            }
        }
    })
</script>
<style lang='less'>
    @import '../less/var.less';
    @import '../less/utils.less';
    @import '../less/layout.less';
    @z-index: @z-min + 200;
    //滑动位置
    .generate-size (@direction; @n; @i : 10) when(@i < @n) {
        .size (@i; @direction) when (@direction = 'left') or (@direction = 'right') {
            &.size-@{i} {
                width: percentage(@i)/100;
            }
            height: 100%;
        }
        .size (@i, @direction) when (@direction = 'top') or (@direction = 'bottom') {
            &.size-@{i} {
                height: percentage(@i)/100;
            }
            width: 100%;
        }
        .size(@i, @direction);
        .generate-size (@direction; @n; (@i + 10));
    }
    .aside-size (@direction){
        .generate-size(@direction;100%; 10);
    }


    //滑动特效
    .aside-translate (@x, @y) {
        -webkit-transform: translate3d(@x, @y, 0);
        -moz-transform: translate3d(@x, @y, 0);
        transform: translate3d(@x, @y, 0);
    }
    .aside-slide (@direction) when (@direction = 'right') {
        .aside-translate(100%, 0);
    }
    .aside-slide (@direction) when (@direction = 'left') {
        .aside-translate(-100%, 0);
    }
    .aside-slide (@direction) when (@direction = 'top') {
        .aside-translate(0, -100%);
    }
    .aside-slide (@direction) when (@direction = 'bottom') {
        .aside-translate(0, 100%);
    }

    .aside-container {
        position: fixed;
        background-color: transparent;
        height: 100%;
        width: 100%;
        top: 0;
        left: 0;
        z-index: @z-index;
        display: block;
        .bg {
            position: absolute;
            height: 100%;
            width: 100%;
            background-color: rgba(0, 0, 0, .6);
            z-index: @z-index - 1;
        }
        aside {
            .flexbox();
            .flexbox.vertical();

            position: absolute;
            z-index: @z-index + 1;
            background-color: @white;
            &.right {
                right: 0;
                .aside-size('right');
            }
            &.left {
                left: 0;
                .aside-size('left');
            }
            &.top {
                top: 0;
                .aside-size('top');
            }
            &.bottom {
                bottom: 0;
                .aside-size('bottom');
            }
            .scroller-container {
                height: 100%;
                &.as-partial {
                    position: relative !important;
                    height: auto;
                }            
                .scroller {
                    height: 100%;
                }
            }
        }
    }
    .aside-enter-active,
    .aside-leave-active {
        transition: all .5s;
        .bg {
            transition: all .5s;
        }
        aside {
            transition: all .5s;
        }
    }
    .aside-enter,
    .aside-leave-active {
        .bg {
            opacity: 0;
        }
        aside {
            &.left {
                .aside-slide('left');
            }
            &.right {
                .aside-slide('right');
            }
            &.top {
                .aside-slide('top');
            }
            &.bottom {
                .aside-slide('bottom');
            }
        }
    }
    
    .aside-enter {
        aside {
            -webkit-transition-timing-function: ease-in;
            -moz-transition-timing-function: ease-in;
            transition-timing-function: ease-in;
        }
    }
    .aside-leave-active {
         aside {
            -webkit-transition-timing-function: ease-out;
            -moz-transition-timing-function: ease-out;
            transition-timing-function: ease-out;
        }
    }
</style>