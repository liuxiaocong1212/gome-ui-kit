/*
 * @Author: zhaoye 
 * @Date: 2017-01-12 17:28:04 
 * @Last Modified by:   zhaoye 
 * @Last Modified time: 2017-01-12 17:28:04 
 */
<template>
    <div class="error-page" :style="isFixed">
        <div class="img-container">
            <img :src="imageUrl">
        </div>
        <p>{{content}}</p>
        <btn v-if="btnContent" @click="onClick" :class-name="'default reverse gray'">{{btnContent}}</btn>
    </div>
</template>
<script>
    import Vue from 'vue';
    import btn from '../button/button.vue'
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
        created: function(){
            this.mountMyself();
            /*if(!$g.env.hybrid){
                this.isFixed = {
                    position: 'initial'
                };
            }*/
        },
        methods: {
            onClick: function(){
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
        .btn {
            margin-top: .2rem;
        }
    }
</style>