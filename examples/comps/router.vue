/*
 * @Author: zhaoye 
 * @Date: 2017-01-18 22:31:50 
 * @Last Modified by:   zhaoye 
 * @Last Modified time: 2017-01-18 22:31:50 
 */
<template>
    <page>
        <div>
            index
        </div>
        <div>
            index
        </div>
        <div>
            index
        </div>
        <div>
            index
        </div>
        <div>
            index
        </div>
        <div>
            index
        </div>
        <div>
            index
        </div>
        <div>
            index
        </div>
        <div>
            index
        </div>
        <div>
            index
        </div>
        <div>
            index
        </div>
        <div>
            index
        </div>
        <div>
            index
        </div>
        <div>
            index
        </div>
        <div>
            index
        </div>
        <div>
            index
        </div>
        <div>
            index
        </div>
        <div>
            index
        </div>
        <div>
            index
        </div>
        <div>
            index
        </div>
        <div>
            index
        </div>
        <div>
            index
        </div>
        <div>
            index
        </div>
        <div>
            index
        </div>
        <div>
            index
        </div>
        <div>
            index
        </div>
        <div>
            index
        </div>
        <div>
            index
        </div>
        <div>
            index
        </div>
        <div>
            index
        </div>
        <div>
            index
        </div>
        <div>
            index
        </div>
        <div>
            index
        </div>
        <div>
            index
        </div>
        <div>
            index
        </div>
        <div>
            index
        </div>
        <div>
            index
        </div>
        <div>
            index
        </div>
        <div>
            index
        </div>
        <div>
            index
        </div>
        <div>
            index
        </div>
        <div>
            index
        </div>
        <div>
            index
        </div>
        <div>
            index
        </div>
        <div>
            index
        </div>
        <div>
            index
        </div>
        <div>
            index
        </div>
        <div>
            index
        </div>
        <div>
            index
        </div>
        <div>
            index
        </div>
        <div>
            index
        </div>
        <div>
            index
        </div>
        <div>
            index
        </div>
        <div>
            index
        </div>
        <div>
            index
        </div>
        <div>
            index
        </div>
        <div>
            index
        </div>
        <div>
            index
        </div>
        <div>
            index
        </div>
        <div>
            index
        </div>
        <div>
            index
        </div>
        <div>
            index
        </div>
        <div>
            index
        </div>
        <div>
            index
        </div>
        <div>
            index
        </div>
        <div>
            index
        </div>
        <div>
            index
        </div>
        <div>
            index
        </div>
        <div>
            index
        </div>
        <div>
            index
        </div>
        <div>
            index
        </div>
        <div>
            index
        </div>
        <div>
            index
        </div>
        <div>
            index
        </div>
        <div>
            index
        </div>
        <div>
            index
        </div>
        <div>
            index
        </div>
        <div>
            index
        </div>
        <div>
            index
        </div>
        <div>
            index
        </div>
        <router-link to="/foo" @click="onClick">
        foo
        </router-link>
    </page>
</template>
<script>
    import Vue from 'vue';
    import {Page} from '../index.js';
    export default Vue.extend({
        components: {
            page: Page
        },
        data () {
            return {
                isShow: true
            }
        },
        methods: {
            onClick () {
                console.log('ww')
            }
        }
    })
</script>
<style >
.test-enter-active {
  transition: all .5s ease;
}
.test-leave-active {
  transition: all .5s ease;
  //transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.test-enter {
    transform: translate3d(100%, 0, 0);
}
.test-leave-active {
    transform: translate3d(-100%, 0, 0);
 }
</style>
<style>
    #app {
        min-height: 1000px;
        width: 100%;
        overflow: hidden;
    }
    .page{
        width: 100%;
        text-align: center;
    }
</style>