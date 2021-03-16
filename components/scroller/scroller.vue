/*
 * @Author: zhaoye 
 * @Date: 2017-01-12 17:25:23 
 * @Last Modified by: zhaoye
 * @Last Modified time: 2017-12-11 21:03:00
 */
<template>
    <div class="scroller-container-wrapper" :class="[direction, className]">
        <div class='scroller-container' :class="[direction, className]">
            <div class='scroller'
            :style='[transform,transition]'
            :class="className"
            @touchstart ='touchstart'
            @touchend ='touchend'
            @transitionEnd ='transitionEnd'
                >
                <slot></slot>
            </div>
        </div>
    </div>
</template>
<script>
import swiperMixin from "../swiper/swiper.mixin.vue";
import base from '../base.vue';
export default {
    props: ['dontDrag','direction', 'className'],
    mixins: [swiperMixin],
    data () {
        return {
            maxTranslate: 0,
            contentLimit: 0,
            $container: null,
            $scroller: null,
            wrapperLimit: 0,
            iam: 'scroller',
        }
    },
    created () {
        this.initSwiper()
        this.$on('scroll', (e) => {
            this.scroll(e);
        });
        this.$on('scrollEnd', (e) => {
            this.scrollEnd(e);
        });
        this.$on('touchEnd', _ => {
            this.$emit('scrollWillEnd', {translate: -this.translate, maxTranslate: this.maxTranslate})
        })
    },
    mounted () {
        this.$container = this.$el
        this.$scroller = this.$el.childNodes[0].childNodes[0]
        this.computeTransLimit()
        this.$scroller.addEventListener('touchmove', this.touchmove, {passive: false})
    },
    methods: {
        reset () {
            this.translate = 0
        },
        scroll (e) {
            if(this.dontDrag)return
            this.computeTransLimit()
            if(this.contentLimit < this.wrapperLimit)return
            if(!this.scrolling)return
            //TODO:为了引用fastclick而注释，需要观察
            // e.stopPropagation()
            if(this.translate < -this.maxTranslate || this.translate > 0){
                this.translate += this.delta/2.5
            }else{
                this.translate += this.delta
            }
        },
        scrollEnd () {
            if(this.dontDrag)return;
            if(this.translate > 0){
                this.translate = 0
            }
            if(this.translate < -this.maxTranslate){
                this.translate = -this.maxTranslate
            }
        },
        _getMargin ($el) {
            if(this.direction == 'horizontal'){
                return $el.offsetWidth
                     + (parseFloat(window.getComputedStyle($el).marginLeft) || 0) 
                     + (parseFloat(window.getComputedStyle($el).marginRight) || 0)
            }else{
                return $el.offsetHeight
                     + (parseFloat(window.getComputedStyle($el).marginTop) || 0) 
                     + (parseFloat(window.getComputedStyle($el).marginBottom) || 0)
            }
        },
        computeTransLimit () {
            let children = this.$scroller.children;
            // this.contentLimit = this._getMargin(this.$scroller);
            this.wrapperLimit = this._getMargin(this.$container);
            // if (this.direction == 'horizontal') {
                this.contentLimit = 0
                for(let i=0; i<children.length; i++){
                    this.contentLimit += this._getMargin(children[i]);
                }
            // }
            if(this.contentLimit < this.wrapperLimit)
                this.maxTranslate = 0;
            else
                this.maxTranslate = this.contentLimit - this.wrapperLimit;
        },
        scrollTo ({x=this.translateX, y=this.translateY}) {
            //开启缓动
            this.easing = true

            //计算位移值
            let translate
            this.direction === 'horizontal' ? (translate = x) : (translate = y)
            
            //计算边界
            this.computeTransLimit()
            
            //赋值
            this.translate = translate
            
            //修正
            if(this.translate > 0){
                this.translate = 0
            }
            if(this.translate < -this.maxTranslate){
                this.translate = -this.maxTranslate
            }
        }
    }
};
</script>
<style lang='less'>
     @import '../less/layout.less';
    .scroller-container-wrapper {
        .flexbox();
        &.vertical {
            .flexbox.vertical();
        }
        position: relative;
        overflow: hidden;
        .scroller-container {
            // .flexbox();
            // .flexitem(1);
            &.vertical {
                // .flexbox.vertical();
                position: relative;
                width: 100%;
                .scroller {
                    position: relative;
                    width: 100%;
                }
            }
            &.horizontal {
                .scroller {
                    display: -webkit-box;
                }
            }
            .scroller-container {
                position: relative;
                
            }
        }
    }
    
</style>
