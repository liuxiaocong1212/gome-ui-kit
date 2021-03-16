/*
 * @Author: zhaoye
 * @Date: 2017-01-18 22:32:06
 * @Last Modified by: duantao-ds
 * @Last Modified time: 2018-08-28 18:55:29
 */
<template>
    <page>
            <cnav :title="'scroller组件'" :next="'swiper'" ></cnav>
            <scroller :direction="'horizontal'">
                <div v-for="(h_item, index) in list" :key="index">
                    <img  :src="h_item">
                </div>
            </scroller>
            <scroller :direction="'vertical'">
                <p>scroller可以有横竖两个方向</p>
                <p>用手指上下滑动页面试试看</p>
                <p>要注意的是</p>
                <p>如果scroller在竖直模式时不是满屏的，需要一些附加类</p>
                <div>
                    <div v-for="(item, index) in list" :key="index">
                        <img :src="item">
                    </div>
                    <p>scroller可以嵌套</p>
                    <p>下方是一个横向的scroller</p>
                </div>
            </scroller>

    </page>
</template>
<script>
    import Vue from 'vue';
    import {Scroller, Page} from 'gome-ui-kit';
    import Nav from '../widgets/nav.vue';
    export default Vue.extend({
        components: {
            scroller: Scroller,
            page: Page,
            cnav: Nav
        },
        data () {
            return {
                list: [
                    "./images/01.jpg",
                    "./images/02.jpg",
                    "./images/03.jpg",
                    "./images/04.jpg",
                    "./images/05.jpg",
                    "./images/06.jpg",
                    "./images/07.jpg",
                    "./images/08.jpg",
                    "./images/09.jpg",
                    "./images/10.jpg"
                ]
            }
        },
    })
</script>
<style lang="less">
    .scroller-container-wrapper {
        flex: 1;
    }

</style>
