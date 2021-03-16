/*
 * @Author: zhaoye
 * @Date: 2017-01-18 21:31:32
 * @Last Modified by: duantao-ds
 * @Last Modified time: 2018-08-31 16:53:13
 */
<template>
    <page>
        <cnav :title="'button组件'" :next="'radio'"></cnav>
        <div class="buttons">
            <ul>
                <li>
                    <h3>颜色</h3>
                    <div class="line">
                        <cbutton class="default">默认国美红</cbutton>
                        <cbutton class="default reverse">默认反色</cbutton>
                        <cbutton class="default disabled">默认失效</cbutton>
                        <cbutton class="default reverse disabled">默认反色失效</cbutton>
                    </div>
                </li>
                <li>
                    <h3>display</h3>
                    <div class="line">
                        <cbutton class="default reverse">inline-block</cbutton><cbutton class="default reverse">inline-block</cbutton>
                    </div>
                    <div class="line">
                        <cbutton class="default reverse block">block独占一行</cbutton>
                    </div>
                    <div class="line">
                        <cbutton class="default reverse inline">inline行内</cbutton><cbutton class="default reverse inline">inline行内</cbutton>
                    </div>
                </li>
                <li>
                    <h3>自定义</h3>
                    <div class="line">
                        <cbutton class="default custom">自定义</cbutton>
                    </div>
                </li>
                <li>
                    <h3>href 属性</h3>
                    <div class="line">
                        <cbutton :href="href" class="reverse">国美在线</cbutton>
                    </div>
                </li>
                <li>
                    <h3>solt </h3>
                    <div class="line">
                        <cbutton class="reverse">
                            <div class="solt-btn">自定义内容</div>
                        </cbutton>
                    </div>
                </li>
            </ul>
        </div>
    </page>
</template>
<script>
    import Vue from 'vue';
    import {Page, Button} from 'gome-ui-kit';
    import Nav from '../widgets/nav.vue'
    export default {
        name: 'button-example',
        components: {
            page: Page,
            cbutton: Button,
            cnav: Nav
        },
        data() {

            return{
                href: 'https://www.gome.com.cn/'
            }

        }
    }

</script>
<style lang="less" scoped>
    @import '../../components/less/var.less';
    @import '../../components/less/utils.less';
    .btn.custom {
        height: 1rem;
        width: 2rem;
        border: 3px dashed #000;
        background-color: #30efa3;
        color: #ef3030;
    }

    .solt-btn {
        height: 1rem;
        background: #f0f;
        color: #fff;
        line-height: 1rem;
    }
    .buttons {
        ul {
            li {
                h3 {
                    font-size: @font-lg;
                    .set-line-height(1; @font-lg * 2;);
                    border-bottom: 1px solid @gray-dark-border;
                    margin: .25rem .2rem;
                }
                .line {
                    padding: .2rem;
                }
            }
        }
    }
</style>
