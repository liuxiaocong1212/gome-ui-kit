/*
 * @Author: zhaoye
 * @Date: 2017-01-18 21:31:25
 * @Last Modified by: zhaoye
 * @Last Modified time: 2018-01-04 12:23:32
 */
<template>
    <page>
        <cnav :title="'page组件'" :next="'toast'"></cnav>
        <p>
            <gui-tag>标签</gui-tag>标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题
        </p>
        <gui-tag :type="'solid'">实心标签</gui-tag>
        <gui-tag :type="'icon-tag'"><i slot="icon" >标</i>标签</gui-tag>
        <gui-tag :type="'icon-tag'"><i slot="icon" style="background-image:url(//gfs17.gomein.net.cn/T13OdvBgYv1RCvBVdK_360.jpg);"></i>标签</gui-tag>
        <Scroller :direction="'vertical'">

                <p>--------------------</p>
                <p>--------------------</p>
                <p>--------------------</p>
                <p>--------------------</p>
                <p>--------------------</p>
                <p>--------------------</p>
                <p>--------------------</p>
                <p>--------------------</p>
                <p>--------------------</p>
                <p>--------------------</p>
            <div class="content">
                <p style="font-weight:bold;">本demo全部基于gome-ui-ki构建</p>
                <br/>
                <p>·</p>
                <p>·</p>
                <p>·</p>
                <p>·</p>
                <p>·</p>
                <p>·</p>
                <p>·</p>
                <p>·</p>
                <p>·</p>
                <p>·</p>
                <p>·</p>
                <p>·</p>
                <p>·</p>
                <p>·</p>
                <p>·</p>
                <p>·</p>
                <p>·</p>
                <p>·</p>
                <p>·</p>
                <p>·</p>
                <p>·</p>
                <p>·</p>
                <p>·</p>
                <p>·</p>
                <p>·</p>
                <p>·</p>
                <p>·</p>
                <p>·</p>
                <p>·</p>
                <p>·</p>
                <p>·</p>
                <p>·</p>
                <p>·</p>
                <p>·</p>
                <p>·</p>
                <p>·</p>
                <p>·</p>
                <p>·</p>
                <p>·</p>
                <p>·</p>
                <p>·</p>
                <p>·</p>
                <p>·</p>
                <p>·</p>
                <p>·</p>
                <p>·</p>
                <br/>
                <p>这是一个page组件</p>
                <br/>
                <p>可以在这里插入任何内容</p>
                <br/>
            </div>
        </Scroller>
    </page>
</template>
<script>
import Vue from 'vue';
import {Page, Button, Scroller} from 'gome-ui-kit';
import Nav from '../widgets/nav.vue';
export default Vue.extend({
    components: {
        page: Page,
        cbutton: Button,
        cnav: Nav,
        Scroller
    },
    created () {
        console.log(this.$style)
    }
})

</script>
<style lang="less" module>
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
