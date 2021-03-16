/*
 * @Author: zhaoye 
 * @Date: 2017-01-18 22:31:52 
 * @Last Modified by:   zhaoye 
 * @Last Modified time: 2017-01-18 22:31:52 
 */
<template>
    <page>
        <div>
            barrrr
        </div>
        <router-link to="/foo/baz">aaa</router-link>
    </page>
</template>
<script>
    import Vue from 'vue';    
    import {Page} from '../index.js';

    export default Vue.extend({
        components: {
            page: Page
        }
    })
</script>
