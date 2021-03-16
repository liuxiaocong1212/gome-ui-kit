/*
 * @Author: zhaoye
 * @Date: 2017-01-19 17:08:11
 * @Last Modified by: duantao-ds
 * @Last Modified time: 2018-09-03 17:36:21
 */
<template>
    <page>
        <cnav :title="'toast组件'" :next="'modal'"></cnav>
        <div class="content">
            <br/>
            <h2>toast 最基本的用法</h2>
            <br/>
            <cbutton @click.native="onClick1" class="default reverse">点击弹出toast，内容为"toast"</cbutton>
            <br/>
            <h2>toast 最基本的用法 && toast 消失的回调函数</h2>
            <br/>
            <cbutton @click.native="onClick2" class="default reverse">toast回调，toast完成后会自动弹出toast</cbutton>
            <br/>
            <h2>toast 可配置的用法-时间</h2>
            <br/>
            <cbutton @click.native="onClick3" class="default reverse">toast可配置项的用法，配置存在时间</cbutton>
            <br/>
            <h2>toast 可配置的用法-位置 ... 敬请期待...</h2>
            <br/>
            <br/>
            <h2>toast 内容的自定义 ... 敬请期待...</h2>
            <br/>
        </div>
    </page>
</template>
<script>
import Vue from 'vue';
import {Page, Button, Toast} from 'gome-ui-kit';
import Nav from '../widgets/nav.vue';
import eventbus from 'gome-utils-eventbus'

export default Vue.extend({
    components: {
        page: Page,
        cbutton: Button,
        cnav: Nav
    },
    methods: {
        onClick1 () {
            new Toast('toast 最基本用法');
        },
        onClick2 () {
            new Toast('toast等待回调').$on('destroy', () => {
                new Toast('前一个toast完成')
            });
        },
        onClick3 () {
            new Toast({
                text: 'toast等待回调 2秒钟后弹出回调函数',
                duration: 20000
            }).$on('destroy', () => {
                new Toast({
                    text: '前一个toast完成, 我是 回调函数 存在 3s 钟',
                    duration: 3000
                })
            });
        }
    }
})

</script>
<style lang="less" scoped>
@import '../../components/less/layout.less';
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
</style>
