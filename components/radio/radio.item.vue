/*
 * @Author: zhaoye
 * @Date: 2017-01-12 17:29:12
 * @Last Modified by: duantao-ds
 * @Last Modified time: 2018-09-03 18:32:28
 */
<template>
    <span
        @click="onRadioClick(source, index)"
        class="radio"
        :class='{
            "active": source[index].isActive,
            "disable":source[index].isDisable
        }'
    >
        <slot name="pre"></slot>
        <span class="radio-content" v-if="source[index].content">{{source[index].content}}</span>
        <slot name="post"></slot>
    </span>
</template>
<script>
    import Vue from 'vue'
    import mixin from './radio.mixin.vue'
    export default {
        mixins: [mixin],
        props: ['source', 'index'],
        methods: {
            onClick () {
                // this.$emit('onClick', this.source, this.index);
            }
        }
    }
</script>
