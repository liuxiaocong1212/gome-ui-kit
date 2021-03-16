/*
 * @Author: zhaoye 
 * @Date: 2017-01-18 22:31:55 
 * @Last Modified by:   zhaoye 
 * @Last Modified time: 2017-01-18 22:31:55 
 */
<template>
    <page>
        <div>
            aeee
            <!--<router-link to="/foo" >bar</router-link>-->
            <a @click="onClick">aaaaa</a>
        </div>
    </page>
</template>
<script>
    import {Page} from '../index.js';
    export default {
        components: {
            page: Page
        },
        methods: {
            onClick () {
                this.$router.go(-2);
            }
        }
    }
</script>
<style >
    .page{
        width: 100%;
        text-align: center;
    }
</style>