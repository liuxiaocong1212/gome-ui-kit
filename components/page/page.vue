/*
 * @Author: zhaoye 
 * @Date: 2017-01-12 17:28:52 
 * @Last Modified by: zhaoye
 * @Last Modified time: 2017-11-11 19:43:35
 */
<template>
    <div class="page" :style="style">
		<modal-spa></modal-spa>
        <slot></slot>
    </div>
</template>
<script>
    import Vue from 'vue';
    import scroller from '../scroller/scroller.vue';
    export default Vue.extend({
        created () {
			document.querySelector('#pre-loading') ? document.querySelector('#pre-loading').style.display = 'none' : 'do nothing'
        },
        data () {
            return {
                style: {
                    'min-height': document.documentElement.clientHeight + 'px'
                },
            }
        }
    })
</script>
<style lang="less">
    @import '../less/layout.less';
    .page {
        width: 100%;
        // .flexbox();
        // .flexbox.vertical();
    }
</style>