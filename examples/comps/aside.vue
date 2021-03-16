/*
 * @Author: zhaoye 
 * @Date: 2017-01-18 22:31:39 
 * @Last Modified by: zhaoye
 * @Last Modified time: 2017-06-26 19:18:52
 */
<template>
    <page class="aside-page">
        <cnav :title="'aside组件'" :nonext="true"></cnav>
        <scroller :direction="'vertical'" >    
            <div class="content" style="height:1000px">
                <cbutton @click.native="$refs.aslider.in()" class="default">点击我打开侧滑层</cbutton>
            </div>
        </scroller>    
        <caside ref="aslider" :dontRoute="true">
            <div style="height:1rem;">fffff</div>
            <scroller :direction="'vertical'">
                <div>
                    </br>
                    <p  style="padding-left: .2rem;">aside内可以嵌套几乎任何组件，如</p>
                    </br>
                    <p  style="padding-left: .2rem;">aside内可以嵌套scroller</p>
                    </br>
                    <div v-for="item in list">
                        <img :src="item">
                    </div>
                    </br>
                    <p  style="padding-left: .2rem;">aside内嵌套的scroller还可以嵌套scroller</p>
                    </br>
                    <scroller :direction="'horizontal'">
                        <div v-for="item in list">
                            <img :src="item">
                        </div>
                    </scroller>
                </div>
            </scroller>
        </caside>
    </page>
</template>
<script>
    import Vue from 'vue';
    import {Aside, Scroller, Page, Button} from 'gome-ui-kit';
    import Nav from '../widgets/nav.vue';
    export default Vue.extend({
        components: {
            'caside': Aside,
            'scroller': Scroller,
            page: Page,
            cnav: Nav,
            cbutton: Button
        },
        data () {
            return {
                list: [
                    "./images/01.jpg",
                    "./images/02.jpg",
                    "./images/03.jpg"
                ]
            }
        },
    })
</script>
<style lang="less">
    @import '../../components/less/layout.less';
    .aside-page {
        height: 100%;
        .flexbox();
        .flexbox.vertical();
        .content {
            .flexitem(1);
            .flexbox();
            .flexbox.center();
        }
    }
</style>