/*
 * @Author: zhaoye
 * @Date: 2017-01-12 19:48:00
 * @Last Modified by: duantao-ds
 * @Last Modified time: 2018-09-05 17:19:20
 */
<template>
    <page>
        <cnav :title="'swiper组件'" :next="'aside'"></cnav>
        <div class="content">
            <br/>
            <p style="padding-left: .2rem;">swiper一般用来实现轮播</p>
            <br/>
            <swiper :list="list" :options="options">
                <slider slot="slider" :key="index"  v-for="(item, index) in list">
                     <CImage :src="item"></CImage>
                </slider>
                <Pagination slot="pagination"></Pagination>
            </swiper>
            <!--<slot name='swiperU'></slot>-->
            <br/>
            <p style="padding-left: .2rem;">swiper中甚至可以嵌套scroller</p>
            <p style="padding-left: .2rem;">下方swiper中每一个slider都可以上下滑动</p>
            <p style="padding-left: .2rem;">swiper本身可以左右轮播</p>
            <p style="padding-left: .2rem;">当然需要一点hack</p>
            <br/>
            <!--<swiper :list="list" :options="options">
                <slider slot="slider"  v-for="item in list" :options="options">
                    <scroller :direction="'vertical'">
                        <img src="../images/01.jpg">
                        <img src="../images/02.jpg">
                    </scroller>
                </slider>
            </swiper>-->
            <p>未完待续</p>
            <br/>
        </div>
    </page>
</template>
<script>
    import Vue from 'vue';
    import {Swiper, Slider, Scroller, Page, Pagination, CImage} from 'gome-ui-kit';
    import Nav from '../widgets/nav.vue';
    export default Vue.extend({
        components: {
            CImage,
            swiper: Swiper,
            slider: Slider,
            scroller: Scroller,
            page: Page,
            cnav: Nav,
            Pagination,
        },
        data () {
            return {
                list: Swiper.loop([
                    "./images/01.jpg",
                    "./images/02.jpg",
                    "./images/03.jpg",
                    "./images/04.jpg",
                ]),
                options: {
                    perSliders: 1,
                    autoPlay: true,
                    loop: true,
                }
            }
        },
        created () {
            setTimeout(_ => {
                this.list = Swiper.loop([
                    "./images/01.jpg",
                    "./images/02.jpg",
                    "./images/03.jpg",
                    "./images/04.jpg",
                    "./images/01.jpg",
                    "./images/02.jpg",
                    "./images/03.jpg",
                    "./images/04.jpg",
                ])
            }, 3000)
        },
        methods(idx) {
            alert(idx);
        }
    })
</script>
<style lang="less">
    .swiper-container {
        height: 4rem;
    }
</style>
