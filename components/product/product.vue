/*
 * @Author: zhaoye
 * @Date: 2017-01-12 17:28:55
 * @Last Modified by: zhaoye
 * @Last Modified time: 2017-12-11 16:44:29
 */
<template>
    <div class='product'>
        <a class='react' :href="href || 'javascript:;'">
            <div class='container img'>
                <slot name='tag'></slot>
                <slot name='mask'></slot>
                <slot name='mask-bottom-bar'></slot>
                <CImage :src="img" :isProduct="true"></CImage>
                <!-- <img v-lazyload:adapter.product='img' onerror="javascript:this.src='data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=='"> -->
                <!--:src="data.imageUrl" >-->
            </div>
            <div class='container content'>
                <slot name='content'></slot>
            </div>
        </a>
    </div>
</template>
<script>
    import CImage from '../image/image.vue'
    export default {
        // props:['href', 'img'],
        props: {
            href: String,
            img: String
        },
        components: {
            CImage,
        },
    }
</script>
<style lang="less">
    @import '../less/var.less';
    @import '../less/layout.less';
    .line-height-name(@fz){
        line-height: @fz;
        height: @fz * 2;
    }

    .product{
        width: 100%;
        overflow: hidden;
        background-color: @white;
        .container{
            &.img {
                position: relative;
                //.flexitem(1);
                box-sizing: border-box;
            }
        }
        .container{
            &.img {
                background-color: @gray-bg-product;
                background-image: url(../images/default_bg_transparent.png);
                background-repeat: no-repeat;
                background-size: 100% auto;
                background-position: center;
            }
        }
    }

</style>
