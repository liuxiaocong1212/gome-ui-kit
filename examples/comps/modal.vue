/*
 * @Author: zhaoye
 * @Date: 2017-01-19 17:08:11
 * @Last Modified by: duantao-ds
 * @Last Modified time: 2018-09-04 16:00:34
 */
<template>
    <page>
        <cnav :title="'toast组件'" :next="'button'"></cnav>
        <div class="content">
            <cbutton @click.native="onClick1" class="default reverse">点击弹出模态框2222</cbutton>
            <br/>
            <cbutton @click.native="onClick2" class="default reverse">模态框填充自定义html</cbutton>
            <br/>
            <cbutton @click.native="onClick3" class="default reverse">自定义modal作为局部组件</cbutton>
            <br/>
            <modal-spa></modal-spa>

        </div>

        <!--这里是自定义局部组件-->
        <cmodal :title="'title'" :ok="'ok'" :cancel="'cancel'" :show="cmodalShow" @ok="onModalClick" @cancel="onModalClick">
            <div slot="content" >
                <Button>eeee</Button>
                <p>custom-slot-content</p>
                <p>do whatever you want</p>
            </div>
        </cmodal>

    </page>
</template>
<script>
import Vue from 'vue';
import {Page, Button, Modal,CModal} from 'gome-ui-kit';
import Nav from '../widgets/nav.vue';
// import  '../../index.js';

// import ModalSPA from '../../components/modal/modal.spa.vue';
export default Vue.extend({
    components: {
        cmodal: CModal,
        page: Page,
        cbutton: Button,
        cnav: Nav,
    },
    data () {
        return {
            cmodalShow: false
        }
    },
    methods: {
        onClick1 () {
            var data = {
                title: '标题',
                content: '内容',
                hasClose: true,
                ok: '确定aa',
                cancel: '取消bb',
            }
            this.$Modal(data, () => {alert(111); return true});
        },
        onClick2 () {
            new Modal({
                data: {
                    htmlContent: `
                                    <ul>
                                        <li><span><</span>ul<span>></span></li>
                                        <li><span><</span>li<span>></span></li>
                                        <li><span><</span>li<span>></span></li>
                                        <li><span><</span>li<span>></span></li>
                                        <li><span><</span>li<span>></span></li>
                                    </ul>
                    `,
                    ok: '确定',
                    cancel: '取消',
                    content: 'hahah',
                    title: '好',
                    hasClose: true
                }
            })
        },
        onClick3 () {
            this.cmodalShow = true
        },
        onModalClick (msg) {
            this.cmodalShow = false
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
