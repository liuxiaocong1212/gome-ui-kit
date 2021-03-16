/*
 * @Author: zhaoye 
 * @Date: 2017-01-12 17:32:35 
 * @Last Modified by:   zhaoye 
 * @Last Modified time: 2017-01-12 17:32:35 
 */
<template>
    <span>
        <span v-if="status != 'end'" class="timer"><span v-show="this.day>=dayBound"><span class="time day">{{day}}</span><span class="day-tip">天<span v-show="this.day>=3 || hasPostfix">以上</span></span></span><em v-show="this.day<dayBound"><span class="time">{{hour}}</span><i>{{h}}</i><span class="time">{{minitue}}</span><i>{{m}}</i><span class="time">{{second}}</span><i v-if="s">{{s}}</i></em></span>
        <span v-else class="timer">
            {{endText}}
        </span>
    </span>
</template>
<script>
    import Vue from 'vue'
    import base from './timer.mixin.vue'
    export default Vue.extend({
        mixins: [base],
        props: ['endContent','type','hasPostfix'],
        data () {
            return {
                endText: '',
                h: ':',
                m: ':',
                s: '',
                dayBound: '1',
            }
        },
        created () {
            this.endText = this.endContent || '已结束'
            if(this.type == '时分秒' || this.type == 'chinese'){
                this.h = '时'
                this.m = '分'
                this.s = '秒'
            }else if (this.type == 'under3'){
                this.dayBound = 3
            }
        }
    })
</script>