/*
 * @Author: zhaoye
 * @Date: 2017-05-08 19:25:58
 * @Last Modified by: zhaoye
 * @Last Modified time: 2017-12-13 10:52:15
 */
<template>
    <Page class="aside-page">
        <CNav :title="'image组件'" :nonext="true"></CNav>
        <Product :img="list[0]">
            <div slot="content">
                eeeee
            </div>
        </Product>
        <CImage  v-for="(image, index) in list" :width="'1rem'" :height="'1rem'" :placeholder="placeholder" :key="index" :src="image"></CImage>
    </Page>
</template>
<script>
    import Vue from 'vue';
    import {CImage, Page, Product} from 'gome-ui-kit';
    import CNav from '../widgets/nav.vue';
    export default Vue.extend({
        components: {
            CImage,
            Page,
            CNav,
            Product,
        },
        data () {
            return {
                list: [
                    './images/01.jpg',
                    './images/02.jpg',
                    './images/03.jpg',
                    './images/04.jpg',
                    './images/05.jpg',
                    './images/06.jpg',
                    './images/07.jpg',
                    './images/08.jpg',
                    './images/09.jpg',
                    ],
                placeholder: require('../images/02.jpg')
            }
        },
    })
</script>
<style lang="less">
.product {
    display: flex;
    .container {
        &.img {
            width: 2rem;
        }
    }
}
</style>
