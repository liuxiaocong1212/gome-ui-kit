/*
 * @Author: renqingyue 
 * @Date: 2017-04-25 12:03:52 
 * @Last Modified by: zhaoye
 * @Last Modified time: 2017-05-02 18:28:56
 */
<template>
    <page class="tabnav">
        <cnav :title="'tabnav组件'" :next="'swiper'" ></cnav>
        <div class="tabnav-box">
            <TabNav :list="list" @active="onActive"></TabNav> 
        </div> 
        <div>
            你点击了低{{iii}}个元素，内容为{{fff}}
        </div>
    </page>
</template>
// list为必传必须格式
<script>
    import Vue from 'vue';
    import {Scroller, Page, TabNav} from 'gome-ui-kit';
    import Nav from '../widgets/nav.vue';  
    export default Vue.extend({
        components: {
            page: Page,
            cnav: Nav,
            TabNav: TabNav,
            Scroller:Scroller,
        },
        data () {
            return {
                iii: 'null',
                fff: 'null',
                list: [
                    {
                        content: 'fafafaaf',
                        isActive: true
                    },
                    {
                        content: 'aafefe',
                        isActive: false
                    },
                    {
                        content: 'bbreberb',
                        isActive: false
                    },
                    {
                        content: '3hju66y',
                        isActive: false
                    },
                    {
                        content: 'vzcvzv',
                        isActive: false
                    },
                    {
                        content: '545hhhh',
                        isActive: false
                    },
                    {
                        content: 'zzvvv',
                        isActive: false
                    },
                    {
                        content: 'fafafaaf',
                        isActive: true
                    },
                    {
                        content: 'aafefe',
                        isActive: false
                    },
                    {
                        content: 'bbreberb',
                        isActive: false
                    },
                    {
                        content: '3hju66y',
                        isActive: false
                    },
                    {
                        content: 'vzcvzv',
                        isActive: false
                    },
                    {
                        content: '545hhhh',
                        isActive: false
                    },
                    {
                        content: 'zzvvv',
                        isActive: false
                    },
                    {
                        content: 'fafafaaf',
                        isActive: true
                    },
                    {
                        content: 'aafefe',
                        isActive: false
                    },
                    {
                        content: 'bbreberb',
                        isActive: false
                    },
                    {
                        content: '3hju66y',
                        isActive: false
                    },
                    {
                        content: 'vzcvzv',
                        isActive: false
                    },
                    {
                        content: '545hhhh',
                        isActive: false
                    },
                    {
                        content: 'zzvvv',
                        isActive: false
                    },
                ],
            }
        },
        methods:{
            onActive:function(index){
                this.iii = index
                this.fff = this.list[index].content
            }
        },
        created:function () {
        }
    })
</script>
<style lang="">
</style>
