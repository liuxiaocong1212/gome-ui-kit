/*
 * @Author: zhaoye 
 * @Date: 2017-01-23 16:42:12 
 * @Last Modified by: zhaoye
 * @Last Modified time: 2017-12-11 21:05:33
 */
<template>
    <CModal 
            :show="show"
            :title="title"
            :ok="ok"
            @ok="onClick"
            @cancel="onClick"
            >
            <div slot="content">
                全局化的自定义modal组件，属于侵入式的重定义了modal，使用方法同modal
            </div>
    </CModal>
</template>
<script>
    import Vue from 'vue';
    import {CModal,ModalMixin} from 'gome-ui-kit'
    export default Vue.extend({
        mixins: [ModalMixin],
        components: {
            CModal
        },
        data () {
            return {
                title: '11',
                ok: 'queding',
                show: true
            }
        },
        methods: {
            onClick () {
                this.show = false;
            }
        }
    })
</script>
<style lang="less">
</style>