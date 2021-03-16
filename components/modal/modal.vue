/*
 * @Author: zhaoye 
 * @Date: 2017-01-12 17:28:37 
 * @Last Modified by: zhaoye
 * @Last Modified time: 2017-07-22 00:58:51
 */
<template>
    <transition name="fade" @after-leave="afterLeave" >
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
                    <btn @click.native="onClick('cancel',$event)" v-if='cancel' :className='"reverse gray btnCan"'>{{cancel}}</btn>
                    <btn @click.native="onClick('ok',$event)" v-if='ok' :className='"reverse gray btnOk"'>{{ok}}</btn>
                </div>
                <slot name="button"></slot>
            </div>
        </div>
    </transition>
</template>
<script>
    import Vue from 'vue';
    import btn from '../button/button.vue'
    import mixin from './modal.mixin.vue'
    export default Vue.extend({
        mixins: [mixin],
        components: {
            btn
        },
		created () {
            this.mountMyself();
        },
        data () {
            return {
                show: false,
                title: '',
                content: '',
                htmlContent: '',
                cancel: '',
                ok: '',
                hasClose: false,
            }
        },
        methods: {
            onClick (msg,e) {
                this.$emit(msg,e);
                if(msg == 'cancel' || msg == 'ok'){
                    this.close();
                }
            },
            close () {
                this.show = false;
            },
            afterLeave () {
                this._destroy();
            },
            _destroy () {
                this.$destroy();
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