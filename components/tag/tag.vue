/*
 * @Author: zhaoye
 * @Date: 2017-01-12 17:32:26
 * @Last Modified by: zhaoye
 * @Last Modified time: 2018-01-04 12:23:48
 */
<template>
    <span class="ui tag" :class="[tagType]">
        <span class="tag-icon-container" v-show="tagType === 'icon-tag'">
            <slot name="icon"></slot>
        </span>
        <span class="tag-content-container">
            <slot></slot>
        </span>
    </span>
</template>
<script>
export default {
    // props: ['type'],
    props: {
        type: String
    },
    data () {
        return {
            tagType: 'default',
        }
    },
    created () {
        if (!!this.type) {
            this.tagType = this.type
        }
        console.log(this.tagType)
    },
    mounted () {
        console.log(this.$el.parentNode)
    }
}
</script>
<style lang="less">
    @import "../less/var.less";
    @import "../less/layout.less";
    @padding: .02rem;
    .ui {
        &.tag {
            margin-right: .02rem;
            vertical-align: middle;
            padding: @padding;
            line-height: 1;
            display: inline-block;
            font-size: @font-sm;
            transform: translateY(-10%);
            &.default {
                margin-top: -1px;
                margin-bottom: -1px;
                border: 1px solid @red;
                color: @red;
            }
            &.solid {
                background-color: @red;
                color: @white;
                border-radius: 2px;
            }
            &.icon-tag {
                margin-top: -1px;
                margin-bottom: -1px;
                border: 1px solid @red;
                color: @red;
                .tag-icon-container {
                    background-color: @red;
                    color: @white;
                    margin: 0 -1 * @padding;
                    padding:0 @padding;
                    >i {
                        display: inline-block;
                        width: .2rem;
                    }
                }
            }
        }
    }
</style>
