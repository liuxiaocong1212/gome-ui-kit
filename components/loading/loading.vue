/*
 * loading组件
 * @Author: zhaoye
 * @Date: 2017-01-12 17:28:25
 * @Last Modified by: duantao-ds
 * @Last Modified time: 2018-09-04 16:21:39
 */
<template>
    <div class="loading-container" :style="style">
        <div class="loading-wrapper" v-show="show">
            <div class="loading loading_play" >
            </div>
        </div>
    </div>
    <!-- svg方案，等解决兼容性问题之后，再启用 -->
    <!-- <svg width="100%" height="100%" viewBox="0 0 100 100">
            <circle cx="50" cy="50" fill="none" r="46" stroke="#dcddde" stroke-width="8"></circle>
                <defs>
                    <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" style="stop-color:#ff0027;stop-opacity:1" />
                        <stop offset="50%" style="stop-color:#ff0027;stop-opacity:1" />
                        <stop offset="100%" style="stop-color:#ff00ff;stop-opacity:1" />
                    </linearGradient>
                </defs>
                <circle cx="50" cy="50" fill="none" r="46" stroke="url(#grad1)" stroke-width="8" stroke-linecap="round" transform="rotate(705.53 49.9999 49.9999)">
                    <animateTransform
                        attributeName="transform"
                        type="rotate" calcMode="linear"
                        values="0 50 50;360 50 50;720 50 50"
                        keyTimes="0;0.5;1"
                        dur="1.5s"
                        begin="0s"
                        repeatCount="indefinite">
                    </animateTransform>
                    <animate
                        attributeName="stroke-dasharray"
                        calcMode="linear"
                        values="40 240;150 130;40 240"
                        keyTimes="0;0.5;1"
                        dur="1.5"
                        begin="0s"
                        repeatCount="indefinite">
                    </animate>
                </circle>
        </svg> -->
</template>
<script>
    import Vue from 'vue'
    import base from '../base.vue'
    export default Vue.extend({
        mixins: [base],
        data () {
            return {
                show: true
                /**
                 *  @external
                 */
                // defferedTime,
                /**
                 *  @external
                 */
                // mode,
            }
        },
        computed: {
            style () {
                const dpr = document.documentElement.getAttribute('data-dpr') || 1
                return {
                    'max-width': `${window.screen.availWidth * dpr}px`,
                    'max-height': `${window.screen.availHeight * dpr}px`,
                }
            }
        },
        created () {
            this.mountMyself2()
            if(this.mode && this.mode == 'lazy'){
                this.show = false
                setTimeout(() => {
                    this.show = true
                }, this.defferedTime || 700)
            }
        },
    })

</script>
<style lang='less'>
@import '../less/var.less';
@import '../less/layout.less';

.loading-container{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 9999999;
    display: -webkit-box;
    -webkit-box-align: center;
    -webkit-box-pack: center;
    .loading-wrapper {
        width: .46rem;
        height: .46rem;
        font-size: @font-nm;
        color: @font-color;
        .flexbox();
        .flexbox.vertical();
        .flexbox.center();
        .loading{
            text-align: center;
            word-break: break-all;
            width: .46rem;
            height: .46rem;
            background: url('./images/loading.png')  no-repeat;
            margin: 0 auto;
            background-size: 100% 100%;
            background-position: 0 0;
        }
        .loading-tip {
            font-size: .2rem;
            // font-weight: bold;
            text-align: center;
            text-indent: .08rem;
        }
        .loading_play{
            -webkit-animation-name: rotate;
            -webkit-animation-iteration-count: infinite;
            -webkit-animation-duration: .5s;
            -webkit-animation-timing-function: linear;

            animation-name: rotate;
            animation-iteration-count: infinite;
            animation-duration: .5s;
            animation-timing-function: linear;
        }
        @-moz-keyframes rotate{
            0% {-moz-transform: rotate(0deg);}
            100% {-moz-transform: rotate(360deg);}
        }
        @-webkit-keyframes rotate{
            0% {-webkit-transform: rotate(0deg);}
            100% {-webkit-transform: rotate(360deg);}
        }
        @keyframes rotate{
            0% {transform: rotate(0deg);}
            100% {transform: rotate(360deg);}
        }

    }
}


</style>
