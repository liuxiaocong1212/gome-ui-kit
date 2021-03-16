/*
 * @Author: zhaoye 
 * @Date: 2017-01-23 16:42:08 
 * @Last Modified by: zhaoye
 * @Last Modified time: 2017-02-20 19:57:03
 */

<template>
    <transition name="fade" appear>
        <div class="alert" v-show="show" :class="className">
            <div class="window">
                <h4 v-if="title || hasClose" class="title">
                    <span v-if="title" :class="{'fix-position': hasClose}" class="text">{{title}}</span>
                    <span v-else :class="{'fix-position': hasClose}" class="text">&nbsp;</span>
                    <button v-if="hasClose" class='close' @click="close">
                        <i></i>
                    </button>
                </h4>
                <slot name="title"></slot>
                <p v-if="content" class="content">{{content}}</p>
                <p v-if="htmlContent" v-html="htmlContent" class="content"></p>
                <slot name="content"></slot>
                <div class="btn-container">
                    <btn @click.native="onClick('cancel',$event)" v-if='cancel' :className='"reverse gray"'>{{cancel}}</btn>
                    <btn @click.native="onClick('ok',$event)" v-if='ok' :className='"reverse gray"'>{{ok}}</btn>
                </div>
                <slot name="button"></slot>
            </div>
        </div>
    </transition>
</template>
<script>
    import Vue from 'vue';
    import btn from '../button/button.vue'
    import base from '../base.vue'
    export default Vue.extend({
        props: ['show','title','content','htmlContent','cancel','ok','hasClose'],
        mixins: [base],
        components: {
            btn
        },
        methods: {
            onClick (msg,e) {
                this.$emit(msg,e);
            },
            close () {
                this.$emit('close');
            }
        },
    })
</script>

<style lang='less'>
@import './modal.less';
</style>
<style scoped>
@import './modal.fx.less';
</style>