/*
 * @Author: zhaoye 
 * @Date: 2017-01-12 17:32:12 
 * @Last Modified by: zhaoye
 * @Last Modified time: 2017-07-24 00:22:55
 */
<template>
    <div id="root" >
        <transition v-if="iOS" :name="transitionName">
            <router-view></router-view>
        </transition>
		<router-view v-else ></router-view>
		<slot></slot>
		<!--<loading></loading>-->
		<!--<toast></toast>-->
    </div>
</template>
<script>
    import Vue from 'vue';
	import {system} from 'gome-utils-env'
    import eventbus from 'gome-utils-eventbus';
    export default Vue.extend({
        data () {
            return {
				outPositions: {},
				iOS: system.ios,
                transitionName: 'page-forward',
                // history: new Map(),
                'min-height': document.documentElement.clientHeight + 'px'
            }
        },
        created () {
            // this.history = new Map();
        },
        watch: {
            '$route' (to, from) {
                const toDepth = !to.path.match(/\/.+/g) ? 0 : to.path.match(/\/((?!\/).)+/g).length
                const fromDepth = !from.path.match(/\/.+/g) ? 0 : from.path.match(/\/((?!\/).)+/g).length
                //这里是当同级路由是使用switch方案
                // if(navigator.userAgent.match(/android/)){
                //     this.transitionName = 'page-switch'
                //     eventbus.emitDOM('scroll');
                //     window.scrollTo(0,0)
                //     setTimeout(() => {
                //         eventbus.emitDOM('scroll');
                //     }, 50)
                //     setTimeout(() => {
                //         eventbus.emitDOM('scrollEnd');
                //     }, 100)
                //     return
                // }
				//返回时回到来时的屏幕位置
				this.outPositions[from.path] = window.scrollY
				if(this.outPositions[to.path]){
					setTimeout(() => {
						window.scrollTo(0, this.outPositions[to.path])
					})
				}else{
					window.scrollTo(0,0)
				}
                if(toDepth == fromDepth){
                    this.transitionName = 'page-switch'
                }else{
                    this.transitionName = toDepth < fromDepth ? 'page-backward' : 'page-forward'
                }
				eventbus.emitDOM('scroll')
				setTimeout(() => {
					eventbus.emitDOM('scroll')
				}, 100)
				setTimeout(() => {
					eventbus.emitDOM('scrollEnd')
				}, 200)
                //这里似乎能解决同级路由先后顺序的计算问题，但是需要保留switch方案
                //因为并不能确定此解决方案是否可行
                /*if(this.history.has(to.path) && this.history.get(to.path) == from.path){
                    this.history.delete(to.path)
                    this.transitionName = 'page-backward'
                }else{
                    this.history.set(from.path,to.path)
                    this.transitionName = 'page-forward'
                }*/
            }
        },
    })
</script>
<style lang="less">
    @import '../less/layout.less';
	.layout();
    #root,
    .page {
        font-size: .32rem;
        background-color: #fff;
        opacity: 1;
    }
    .page-forward-enter-active,
    .page-backward-leave-active,
    .page-backward-enter-active,
    .page-forward-leave-active {
        transition: all .2s ease;
        -webkit-transition: all .2s ease;
    }
	
    .page-switch-enter-active,
    .page-switch-leave-active {
        transition: none;
        -webkit-transition: none;
	}
    .page-switch-enter,
    .page-switch-leave-active {
        position: absolute;
        z-index: 10000;
        opacity: 1;
    }
    
    .page-forward-enter,
    .page-backward-leave-active {
        -webkit-transform: translate3d(100%, 0, 0);
        transform: translate3d(100%, 0, 0);
        position: absolute;
        z-index: 10000;
        opacity: 1;
    }
    .page-forward-leave-active,
    .page-backward-enter {
        -webkit-transform:  translate3d(-100%, 0, 0);
        transform: translate3d(-100%, 0, 0);
        position: absolute;
        z-index: 0;
        opacity: 1;
    }
</style>