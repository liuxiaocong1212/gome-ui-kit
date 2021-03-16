/*
 * @Author: zhaoye
 * @Date: 2017-01-19 19:22:25
 * @Last Modified by: liuhuan
 * @Last Modified time: 2017-10-24 18:21:23
 */

<template>
    <page>
        <cnav :noback="'true'" :title="'gome-ui-kit'" ></cnav>
        <div class="content">
            <p style="font-weight:bold;">本demo全部基于gome-ui-ki构建</p>
            <ul>
                <router-link :to="item.url" v-for="(item, index) in links" :key="index" :class="{'active': $route.path === item.url}">
                    <cbutton class="block item" >
                        <p>{{item.content}}</p>
                        <i>></i>
                    </cbutton>
                </router-link>
            </ul>
        </div>
    </page>
</template>
<script>
import Vue from 'vue';
import {Page, Button} from 'gome-ui-kit';
import Nav from '../widgets/nav.vue';
export default Vue.extend({
    components: {
        page: Page,
        cbutton: Button,
        cnav: Nav
    },
    data () {
            return {
                links: [
                    {
                        url: '/page',
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
                    },
                    {
                        url: '/image',
                        content: 'image(图片)组件demo'
                    },
                     {
                        url: '/choose',
                        content: 'choose(复合操作)组件demo'
                    }
                ]
            }
        },
})

</script>
<style lang="less" scoped>
@import '../../components/less/layout.less';
@import '../../components/less/var.less';
@import '../../components/less/utils.less';
@font-size: @font-lg-sm;
@padding-top:  @font-lg * 3;
.page {
    .flexbox();
    .flexbox.vertical();
    .flexbox.center();
    .content {
        .flexitem(1);
        .flexbox();
        .flexbox.vertical();
        .flexbox.center();
    }
}
ul {
    padding-top:  @padding-top;
    .active {
        .item {
            background-color: @gray-bg;
            p {
                color: @red;
            }
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

</style>
