/*
 * @Author: zhaoye 
 * @Date: 2017-01-18 21:31:29 
 * @Last Modified by: zhaoye
 * @Last Modified time: 2017-04-28 18:18:55
 */
<template>
    <nav>
        <cbutton  v-if="$route.path == '/'"  @click.native="more" class="default more">选择</cbutton>
        <cbutton @click.native="back" class="default back"><span v-if="!noback">back</span></cbutton>
        <span class="title">{{title}}</span>
        <cbutton v-if="false"  @click.native="to" class="default next"><span v-if="!nonext">next</span></cbutton>
        <more ref="more"></more>
    </nav>
</template>
<script>
import Vue from 'vue';
import {Button, Toast} from 'gome-ui-kit';
import NavList from './navList.vue';
export default Vue.extend({
    props: ['title', 'next', 'noback', 'nonext'],
    components: {
        cbutton: Button,
        more: NavList,
    },
    methods: {
        back () {
            if(this.$route.path != '/' && !this.noback)
                this.$router.back();
        },
        to () {
            if(!this.nonext)
                this.$router.push(this.next)
        },
        more () {
            this.$refs.more.show();
        }
    }
})
</script>
<style lang="less" scoped>
@import '../../components/less/layout.less';
@import '../../components/less/utils.less';
@import '../../components/less/var.less';
nav {
    .set-line-height(1;.72rem);
    width: 100%;
    display: block;
    // background-color: @red;
    background-color: @nav6;    
    color: @white;
    .flexbox();
    .btn {
        z-index: 11;
        width:  1.2rem;
        .set-line-height(1;.72rem);
        &.more {
            width: 1rem;
            text-align: center;
        }
        &.back {
            text-align: left;
        }
        &.next {
            text-align: right;
        }
    }
    .title {
        .set-line-height(1;.72rem);
        .flexitem(1);
        position: absolute;
        width: 100%;
        text-align: center;
    }
}
</style>