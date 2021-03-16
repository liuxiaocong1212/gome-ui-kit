/*
 * @Author: zhaoye
 * @Date: 2017-01-09 13:39:53
 * @Last Modified by: zhaoye
 * @Last Modified time: 2017-12-11 21:23:07
 */
<template>
    <span class="option" @click="onOptionClick(source, index)" :class="status" >
        <slot name="pre"></slot>
        <span v-if="source[index].content">{{source[index].content}}</span>
        <slot name="post"></slot>
    </span>
</template>
<script>
    import Vue from 'vue'
    import mixin from './option.mixin.vue'
    export default{
        mixins: [mixin],
        props: ['source','index'],
        computed: {
            status () {
                if(this.source[this.index].isDisable){
                    return 'disable'
                }else{
                    return this.source[this.index].isActive ? 'active' : ''
                }
            }
        },
        methods: {
            onClick () {
                // this.$emit('onClick', this.source, this.index)
            }
        }
    }
</script>
<style lang="less" scoped>
</style>
