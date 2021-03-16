/*
 * @Author: renqingyue 
 * @Date: 2017-04-25 13:46:59 
 * @Last Modified by: zhaoye
 * @Last Modified time: 2017-11-27 13:34:59
 */
 <template>
    <scroller class="tabnav" ref="scroller" :direction='"horizontal"'>
        <div  class="tabnav-item"
            :key="index"
            v-for="(item, index) in list"
            @click="onClick(index,true)"
            :class="{'active': item.isActive}"
            >
            <span>{{item.content}}</span>
        </div>
    </scroller>
</template>
 <script>
    import Vue from 'vue';
    import scroller from '../scroller/scroller.vue';
    module.exports= {
        props: ['list','cubic'],
        components: {
            scroller
        },
        data: function(){
            return {
               listActArr : [],
               index_t : 0,
               clientWidth : document.documentElement.clientWidth,
                //    滚动的距离
               toleft : 0, 
                //    页面的宽度
               maxTranslate0 : 0,
                 //    向左向右
               isLeftR : 0,
               isScroll : false
            }
        },
        methods: {
            onClick (index,value) {
                //TODO y轴的问提
                this.list.map(item => {
                    item.isActive = false
                })
                this.list[index].isActive = true

                const $elList = this.$el.querySelectorAll('.tabnav-item')

                let elWidth
                let restWidth = 0
                let listWidth = 0
                let containerWidth = this.$refs.scroller.$el.offsetWidth
                for(let i=0; i<$elList.length; i++){
                    const $el = $elList[i]
                    if( i == index){
                        //TODO 匹配margin的情况
                        elWidth = $el.offsetWidth
                    }
                    if( i < index){
                        restWidth += $el.offsetWidth
                    }
                    listWidth += $el.offsetWidth
                }
                //TODO 匹配margin的情况
                this.$refs.scroller.scrollTo({
                    x:  -1 * ((restWidth + elWidth/2) - containerWidth/2),
                })
                if(value){
                    this.$emit('active', index)
                }
            },
        },
    }
 </script>
<style lang="less">
    @import '../less/var.less';
    @import '../less/layout.less';
    @import '../less/utils.less';
    @font-size: @font-nm;
    .tabnav {
        background-color: @white;
        border-bottom: 1px solid @gray-border;
        .tabnav-item {
            color: @font-color;
            font-size: @font-size;
            padding: 0 @font-size/2;
            .set-line-height(1; .84rem);
            &.active {
                color: @red;
                border-bottom: 2px solid @red;
            }
        }
        .scroller-container {
            margin-bottom: -1px;
        }
    }
</style>
