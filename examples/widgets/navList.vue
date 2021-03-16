/*
 * @Author: zhaoye 
 * @Date: 2017-01-18 22:31:37 
 * @Last Modified by: renqingyue
 * @Last Modified time: 2017-04-25 14:57:44
 */
<template>
    <caside class="nav-more" position="80" ref="aside" :dontRoute="true">
        <h3>DEMO列表</h3>
        <scroller :direction="'vertical'" >
            <router-link :to="item.url" v-for="item in links" :class="{'active': $route.path === item.url}">
                <cbutton class="block item" >
                    <p>{{item.content}}</p>
                    <i>></i>
                </cbutton>
            </router-link>
        </scroller>
    </caside>
</template>
<script>
    import Vue from 'vue';
    import {Aside, Scroller, Button} from 'gome-ui-kit';
    export default Vue.extend({
        components: {
            caside: Aside,
            scroller: Scroller,
            cbutton: Button,
        },
        data () {
            return {
                links: [
                    {
                        url: '/',
                        content: 'page(页面)组件dmoe'
                    },
                    {
                        url: '/toast',
                        content: 'toast(提示)组件demo'
                    },
                    {
                        url: '/modal',
                        content: 'modal(模态框)组件demo'
                    },
                    {
                        url: '/button',
                        content: 'button(按钮)组件demo'
                    },
                    {
                        url: '/radio',
                        content: 'radio(单选框)组件demo'
                    },
                    {
                        url: '/option',
                        content: 'option(复选框)组件demo'
                    },
                    {
                        url: '/scroller',
                        content: 'scroller(滑动容器)组件demo'
                    },
                    {
                        url: '/swiper',
                        content: 'swiper(轮播滑动容器)组件demo'
                    },
                    {
                        url: '/aside',
                        content: 'aside(侧滑容器)组件demo'
                    },
                    {
                        url: '/tabnav',
                        content: 'tabnav(tab切换)组件demo'
                    }
                ]
            }
        },
        methods: {
            show () {
                this.$refs.aside.in();
            },
        }
    })
</script>
<style lang="less">
@import '../../components/less/layout.less';
@import '../../components/less/utils.less';
@import '../../components/less/var.less';
@font-size: @font-lg-sm;
@padding-top:  @font-lg * 3;
.active(){
    background-color: @gray-bg;
    p {
        color: @red;
    }
}
.nav-more {
   aside {
        h3 {
            .set-line-height(1; @padding-top);
            font-size: @font-lg;
            color: @gray-dark;
            padding-left: @font-size;
            border-bottom: 1px solid @gray-dark-border;
        }
        .scroller {
            padding-top:  @padding-top;
            .active {
                .item {
                    .active();
                }
            }
            .item {
                .flexbox();
                font-size: @font-size;
                padding-left: @font-size;
                border-bottom: 1px solid @gray-border;
                &.hover {
                    background-color: @gray-bg;
                    p {
                        color: @red;
                    }
                }
                p {
                    .flexitem(1);
                    text-align: left;
                    .set-line-height(1; @font-size * 2);
                }
                i {
                    width: @font-lg-sm;
                    color: @red;
                    .set-line-height(1; @font-size * 2);
                }
            }
        }
    }
}

</style>