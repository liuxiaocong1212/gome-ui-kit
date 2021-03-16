/*
 * @Author: zhaoye 
 * @Date: 2017-01-12 17:29:10 
 * @Last Modified by: zhaoye
 * @Last Modified time: 2017-12-11 21:19:47
 */
<template>
    <div class="radio-container">
        <radio v-for="(item, index) in source" 
                :key="index"
                :source="source" 
                :index="index" 
                @onClick="onRadioClick(source, index)">
        </radio>
    </div>
</template>
<script>
    import Vue from 'vue';
    import radio from './radio.item.vue'
    import radioMixin from './radio.mixin.vue'
    export default {
        mixins: [radioMixin],
        props: ['source'],
        components: {
            radio,
        },
        created () {
           this.initRadio(this.source);
        }
    }
</script>