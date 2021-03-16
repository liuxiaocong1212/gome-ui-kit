<template>
    <page>
        <cnav :title="'option组件'" :next="'scroller'"></cnav>
        <div class="option-container">
            <p>你喜爱吃的肉的种类有</p>
            <br/>
            <coption v-for="(item, index) in data" :source="data" :key="index" :index="index" @onClick="onOptionClick">
                <i slot="pre">选项：</i>
                <i slot="post">√</i>
            </coption>
            <br/>
            <br/>
            <p>你的选择是：{{result}}</p>
            <br/>
            <br/>
        </div>
    </page>
</template>

<script>
    import Vue from 'vue';
    import {
        OptionItem,
        OptionMixin,
        Page
    } from 'gome-ui-kit';
    import Nav from '../widgets/nav.vue';
    export default Vue.extend({
        mixins: [OptionMixin],
        components: {
            coption: OptionItem,
            cnav: Nav,
            page: Page
        },
        data() {
            return {
                data: [{
                        content: '猪肉',
                        isActive: false,
                        isDisable: false,
                    },
                    {
                        content: '牛肉',
                        isActive: false,
                        isDisable: false,
                    },
                    {
                        content: '鸡肉',
                        isActive: false,
                        isDisable: false,
                    },
                    {
                        content: '恐龙肉',
                        isActive: false,
                        isDisable: true,
                    },
                ]
            }
        },
        computed: {
            result() {
                let result = ''
                for (let i = 0; i < this.data.length; i++) {
                    if (this.data[i].isActive) {
                        result += this.data[i].content + '; '
                    }
                }
                return result;
            }
        },
        created() {}
    })
</script>

<style lang="less" scoped>
    .option-container {
        padding: .25rem;
        .option {
            margin-right: .1rem;
            display: block;
            &.active {
                color: #ef3030;
            }
            &.disable {
                color: #a3a3a3;
                text-decoration: line-through;
            }
        }
    }
</style>
