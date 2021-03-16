/*
 * @Author: zhaoye 
 * @Date: 2017-05-17 19:17:05 
 * @Last Modified by: zhaoye
 * @Last Modified time: 2017-11-27 13:35:14
 */
<template>
    <div class="pagination">
        <i :key="index" :class="{active: activeIdx == index}" v-for="(page, index) in $parent.originList"></i>
    </div>
</template>
<script>
    import Vue from 'vue'
    export default Vue.extend({
        props: ['list','options'],
        data () {
            return {
                activeIdx: 0,
            }
        },
        mounted () {
            this.$parent.$on('scrollAt', (idx) => {
                this.activeIdx = idx
            })
        },
    })
</script>
<style lang="less">
    @import '../../components/less/var.less';
    @import '../../components/less/layout.less';
    .pagination {
        .flexbox();
        .flexbox.center();
        position: absolute;
        bottom: 0;
        z-index: @z-min+1;
        height: .3rem;
        width: 100%;
        i {
            margin: 0 .05rem;
            display: block; 
            width: .3rem;
            height: .06rem;
            background-color: @white;
            opacity: .3;
            &.active {
                background-color: @white;
                opacity: 1;
            }
        }
    }
</style>