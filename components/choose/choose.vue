/*
 * @Author: liuhuan 
 * @Date: 2017-10-24 17:28:15 
 * @Last Modified by: zhaoye
 * @Last Modified time: 2017-11-27 13:36:52
 * @Description: 混合操作组件，支持单选、复选、单选取消
 */
<template>
        <!--option-->
        <span class="option" :class="status"
            v-if="type=='option'"
            @click="onOptionClick(source, index)">
            <slot name="pre"></slot>
            <span v-if="source[index].content">{{source[index].content}}</span>
            <slot name="post"></slot>
        </span>
        <!--radio 默认-->
        <span v-else class="radio" :class='status'
            @click="onRadioClick(source, index, isCancel)">
            <slot name="pre"></slot>
            <span class="radio-content" v-if="source[index].content">{{source[index].content}}</span>
            <slot name="post"></slot>
        </span>
        
</template>
<script>
    import Vue from 'vue'
    import Radio from '../radio/radio.item.vue'
    import Option from '../option/option.vue'
    export default Vue.extend({
         //isCancel针对radio传参，表示是否可取消
         //type表示组件的类型（raido/option）,默认radio，可不传type
        props:['source','index','isCancel','type'],
        component:{
            Radio,
            Option,
        },
        data(){
            return {
                //isCancel:this.isCancel||false, //radio增加当前取消功能
                
            }
        },
        computed:{
            status () {
                if(this.source[this.index].isDisable){
                    return 'disable'
                }else{
                    return this.source[this.index].isActive ? 'active' : ''  
                }
            },
        },
        methods: {
            onRadioClick (data, index,isCancel) {//单选
                if(data[index].isDisable)return;
                data.forEach((_item, idx) => {
                    if(index != idx)
                        data[idx].isActive = false;
                });
                if(isCancel){ //单选支持当前取消操作
                    if(data[index].isActive){
                        data[index].isActive = false
                    }else{
                        data[index].isActive = true
                    }
                }else{
                    data[index].isActive = true
                }
            },
            onOptionClick (data, index) {//复选
                if(data[index].isDisable)return;
                data[index].isActive = data[index].isActive ? false : true;
            },
        },
    })
</script>