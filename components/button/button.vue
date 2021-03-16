/*
 * @Author: zhaoye
 * @Date: 2017-01-12 17:27:21
 * @Last Modified by: duantao-ds
 * @Last Modified time: 2018-08-31 15:07:36
 */
//btn.vue
<template>
    <a class='btn' @touchend="touchend" ref="btn" @touchstart='touchstart' :href="href" :class='[hover, className]'>
        <slot></slot>
    </a>
</template>

<script>
    import base from '../base.vue';
    export default {
        name: 'gui-button',
        mixins: [base],
        // props 类型验证
        props: {
            href: String,
        },
        data() {
            return {
                isHover: true,
                hover: '',
            }
        },
        computed: {
            disabled() {
                return this.$refs.btn.classList.contains('disabled')
            }
        },
        methods: {
            touchstart() {
                this.hover = this.disabled ? '' : 'hover';
            },
            touchend() {
                this.hover = '';
            }
        }
    }
</script>

<style lang='less'>
    @import '../less/var.less';
    .btn {
        @padding: 0 .2rem;
        @height-sm: .56rem;
        @height: .72rem;
        @height-lg: .8rem;
        @height-lger: .84rem;
        @br: .04rem;
        display: inline-block;
        padding: @padding;
        &[data-icon]:before {
            display: inline;
            line-height: @height-sm;
            font-size: @font-nm;
        }
        &.default {
            border-radius: @br;
            border: .02rem @red solid;
            background-color: @red;
            font-size: @font-nm;
            color: @white;
            line-height: @height;
            &.hover {
                // border-color: @red-dark;
                // background-color: @red-dark;
            }
            &.disabled {
                background-color: @gray-lighter;
                color: @gray-light;
                border-color: @gray-lighter;
            }
            &.large {
                line-height: @height-lg;
                font-size: @font-lg;
                &.disabled {
                    background-color: @red;
                    color: @white;
                    opacity: .3;
                }
            }
        }
        &.inline {
            line-height: @height-lger;
            background-color: @red;
            font-size: @font-lg;
            color: @white;
            border-radius: none;

            &.disabled {
                .default.disabled;
            }
            &.hover {
                .default.hover;
            }
        }
        &.reverse {
            line-height: @height-sm;
            border-radius: @br;
            border: .02rem @red solid;
            color: @red;
            background-color: @white;
            font-size: @font-nm;
            &.hover {
                background-color: @red;
                color: @white;
            }
            &.disabled {
                opacity: .3;
            }
            &.gray {
                background-color: @white;
                color: @gray;
                border: .02rem @gray-border solid;
                &.hover {
                    background-color: @gray-border;
                }
            }
        }
        &.icon-btn {
            font-size: @font-nm;
            border: .02rem @gray solid;
            color: @gray;
            &.hover {
                color: @white;
                background-color: @gray;
            }
        }
        &.block {
            display: block;
            border-radius: 0;
            text-align: center;
        }
    }
</style>
