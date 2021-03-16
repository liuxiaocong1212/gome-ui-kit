/*
 * @Author: zhaoye 
 * @Date: 2017-01-12 17:28:09 
 * @Last Modified by: zhaoye
 * @Last Modified time: 2017-11-27 12:13:57
 */
<template>
    <div class="error-page" :style="isFixed">
        <div class="img-container">
            <img :src="'https://app.gomein.net.cn/plus/plus-public/images/public/404.png'">
        </div>
        <p>网络找不到了~</p>
        <btn @click.native="onClick" class="default reverse gray">重新加载</btn>
    </div>
</template>
<script>
    import Vue from 'vue';
    import btn from '../button/button.vue';
    import base from '../base.vue';
    export default Vue.extend({
        mixins: [base],
        components: {
            'btn': btn
        },
        data () {
            return {
                isFixed: {
                    position: 'initial'
                }
            }
        },
        created () {
            this.mountMyself();
            // if(!$g.env.hybrid){
            //     this.isFixed = {
            //        position: 'initial';
            //    };
            // }
        },
        methods: {
            onClick () {
                this.$emit('click')
                this.destroyMyself()
            }
        }
    })
</script>
<style lang='less'>
    @import '../less/var.less';
    @import '../less/layout.less';
    @import '../less/utils.less';
    .error-page {
        .flexbox();
        .flexbox.vertical();
        .flexbox.center();
        position: fixed;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        background-color: @gray-bg;
        z-index: @z-max * 2;
        .img-container {
            width: 50%;
            max-width: 320px;
        }
        p {
            font-size: @font-lg-sm;
            color: @gray;
            .set-line-height(1; @font-lg-sm * 2);
        }
    }
</style>