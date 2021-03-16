/*
 * @Author: zhaoye
 * @Date: 2017-01-12 17:28:18
 * @Last Modified by: duantao-ds
 * @Last Modified time: 2018-09-05 18:55:43
 */
<template>
    <div class="gome-ui-img-container" :class="logoSize" :init-width="w" :init-height="h">
        <img v-if="isProduct" v-lazyload:adapter.product='src' onerror="javascript:this.src='data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=='">
        <img v-else :src="placeholder || 'data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=='" v-lazyload="src">
    </div>
</template>
<script>
    import Vue from 'vue';
    import Lazyload from 'gome-ui-lazyload'
    export default Vue.extend({
        // props: ['src', 'placeholder', 'width', 'height', 'isProduct'],
        props: {
            src: String,
            placeholder: String,
            width: [String, Number],
            height: [String, Number],
            isProduct: Boolean
        },
        data () {
            return {
                w: '',
                h: '',
                logoSize: 'no-logo',
            }
        },
        mounted () {
            this.$el.querySelector('img').addEventListener('load', this.imgLoaded);

            this.$el.querySelector('img').addEventListener('error', () => {
                setTimeout(() => {
                    this.imgLoaded()
                })
            });
        },

        methods: {
            imgLoaded () {
                const wh = window.getComputedStyle(this.$el);

                let rect = this.$el.getBoundingClientRect();
                this.computeLogoSize(wh);
                // this.$el.querySelector('img').removeEventListener('load', this.imgFirstLoaded)
            },

            computeLogoSize (wh) {
                const width = wh.width.match(/(\d+(\.\d+)?)+px/);
                const height = wh.height.match(/(\d+(\.\d+)?)+px/);

                this.w = width ? width[1] : '';
                this.h = height ? height[1] : '';

                if (this.width) {
                    this.w = this.width.split('rem')[0] * 100
                }
                if (this.height) {
                    this.h = this.height.split('rem')[0] * 100
                }
                // 计算
                const dpr = document.documentElement.getAttribute('data-dpr') ? Number(document.documentElement.getAttribute('data-dpr')) : 1;

                // 取短的一条边
                const shortEdge = this.w > this.h ? this.h : this.w;


                if (shortEdge < dpr * 100 / 2) {
                    // 最短的边小于100px（*dpr）时，不显示logo
                    this.logoSize = 'no-logo'
                }
                else if (shortEdge <= dpr * 260 / 2 && shortEdge >= dpr * 100 / 2) {
                    // 小于等于 260 大于等于 100 时 小的logo
                    this.logoSize = 'small'
                }
                else if (shortEdge < dpr * 360 / 2 && shortEdge > dpr * 260 / 2) {
                    // 小于 360 大于等于 200 时 小的logo
                    this.logoSize = 'middle'
                }
                else {
                    this.logoSize = 'big'
                }
            }
        }
    })
</script>
<style lang='less'>
    @import "../less/var.less";
    .gome-ui-img-container {
        background-color: @gray-bg-lazyload-img;
        background-image: url('../images/default_bg_transparent.png');
        background-repeat:  no-repeat;
        background-position: center center;
        background-size: auto;
        &.big {
            background-size: 1.12rem;
        }
        &.middle {
            background-size: .88rem;
        }
        &.small {
            background-size: .58rem;
        }
        &.no-logo {
            background-image: none;
        }
    }
</style>
