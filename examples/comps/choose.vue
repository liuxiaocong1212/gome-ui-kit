/*
 * @Author: liuhuan
 * @Date: 2017-10-24 18:01:32
 * @Last Modified by: liuhuan
 * @Last Modified time: 2017-10-25 14:08:41
 */
<template>
    <page>
        <cnav :title="'choose组件'" :next="'option'"></cnav>
         <section >
            <br/>
            <div v-if="show">
                <p>[radio]你最喜欢的蔬菜是：</p>
                <br/>
                <Choose v-for="(item,index) in data" :key="index"
                :source="data" :index="index" :isCancel="true">
                    <i slot="pre">.</i>
                </Choose>
                <br/>
                <br/>
                <p>你的选择是：{{result}}</p>
            </div>
             <div v-else>
                <p>[option]你最喜欢的运动是：</p>
                <br/>
                <Choose v-for="(item,index) in data2" :key="index" :source="data2" :index="index" :type="'option'">
                    <i slot="pre">.</i>
                </Choose>
                <br/>
                <br/>
                <p>你的选择是：{{result2}}</p>
            </div>
            <br/>
            <br/>
        </section>
            <br/>
            <br/>
            <p><Button @click.native="showToggle">切换</Button></p>
            <br/>
            <br/>

    </page>
</template>
<script>
    import Vue from 'vue';
    import {Page,Button,Choose} from 'gome-ui-kit'
    import Nav from '../widgets/nav.vue';
    export default Vue.extend({
        components: {
            cnav   : Nav,
            page   : Page,
            Choose,
            Button
        },
        data () {
            return {
                data: [
                        {
                            content: '白菜',
                            isActive: true,
                            isDisable:false,
                        },
                        {
                            content: '芹菜',
                            isActive: false,
                            isDisable:false,
                        },
                        {
                            content: '菠菜',
                            isActive: false,
                            isDisable:false
                        },
                        {
                            content: '不可选',
                            isActive: false,
                            isDisable:true
                        }
                    ],
                data2: [
                        {
                            content: '足球',
                            isActive: false,
                        },
                        {
                            content: '篮球',
                            isActive: true,
                        },
                        {
                            content: '排球',
                            isActive: false,
                        }
                    ],
                show:true,
            }
        },
        computed: {
            result () {
                let result = ''
                for(let i = 0; i < this.data.length; i++){
                    if(this.data[i].isActive){
                        result = this.data[i].content
                    }
                }
                return result;
            },
            result2 () {
                let result = ''
                for(let i = 0; i < this.data2.length; i++){
                    if(this.data2[i].isActive){
                        result = this.data2[i].content
                    }
                }
                return result;
            }
        },
        created () {
        },
        methods:{
            showToggle(){
                if(this.show){
                    this.show = false
                }else{
                    this.show =true
                }
            }
        },
    })
</script>
<style lang="less">
    .radio {
        line-height:15px;
        &.active {
            color: #ef3030;
        }
        &.disable{
            color:#ccc;
            text-decoration:line-through;
        }
    }
    .option {
        line-height:15px;
        &.active {
            color: #ef3030;
        }
        &.disable{
            color:#ccc;
            text-decoration:line-through;
        }
    }
    section {
        padding: .25rem;
    }
</style>
