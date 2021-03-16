/*
 * @Author: zhaoye 
 * @Date: 2017-01-18 22:31:45 
 * @Last Modified by: zhaoye
 * @Last Modified time: 2017-01-19 17:06:31
 */
<template>
    <div>
        <product :href="'m.gome.com.cn'" :img="'http://gfs2.gomein.net.cn/T1nZCTBbbv1RCvBVdK_400.jpg'">
            <div slot="content">
                <div>商品名称</div>
            </div>
        </product>
    </div>
</template>
<script>
    import Vue from 'vue';
    import {Product} from 'gome-ui-kit';
    export default Vue.extend({
        components: {
            product: Product
        }
    })
</script>
<style lang="less">

</style>