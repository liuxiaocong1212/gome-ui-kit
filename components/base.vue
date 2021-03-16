/*
 * @Author: zhaoye 
 * @Date: 2017-01-12 17:32:45 
 * @Last Modified by: zhaoye
 * @Last Modified time: 2018-01-05 18:03:53
 */
<script>
    /* istanbul ignore else */
    if(window['ctmCid'] !== 0){
        window['ctmCid'] = 0;
    }
    export default {
        props: ['className'],
        methods: {
            //TODO modal toast loading 插件化
            mountMyself (id = 'module') {
                //nextTick导致ios8上loading会在侦听到loaded事件之后出现
                //所有给loading开了个mountMyself2
                this.$nextTick(() => {
                    this.$blocker = document.createElement('div');
                    window['ctmCid']++;
                    this.$blocker.id = id + '-ctm-' + window['ctmCid'];
                    document.body.appendChild(this.$blocker);
                    this.$mount('#'+this.$blocker.id);
                });
            },
             mountMyself2 (id = 'module') {
                //ps. 注释掉nextTick会导致内置modal组件的组件，出现在root外的情况
                //所以新开一个注释掉的，给loading专门用
                //this.$nextTick(() => {
                    this.$blocker = document.createElement('div');
                    window['ctmCid']++;
                    this.$blocker.id = id + '-ctm-' + window['ctmCid'];
                    document.body.appendChild(this.$blocker);
                    this.$mount('#'+this.$blocker.id);
                //});
            },
            destroyMyself () {
                this.$destroy();
            }
        },
        beforeDestroy () {
            /* istanbul ignore else */
            if(this.$el && this.$el.parentNode)
                this.$el.parentNode.removeChild(this.$el);
        }
    }
</script>