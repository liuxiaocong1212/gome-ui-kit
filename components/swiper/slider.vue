/*
 * @Author: zhaoye
 * @Date: 2017-01-12 18:33:26
 * @Last Modified by: duantao-ds
 * @Last Modified time: 2018-09-05 16:18:40
 */
<template>
    <div class='slider' v-bind:style='[otherStyle]'>
        <slot></slot>
    </div>
</template>
<script>
    module.exports = {
        props:['index','content','height'],
        data: function(){
            return {
                pos: 0,
                otherStyle: {
                    'height': 'auto',
                    'width': '100%',
                    'left': '0',
                    'position': 'relative'
                }
            }
        },
       /* computed: {
            transform: function(){
                return {
                    'transform': 'translate3d('+this.pos+'px, 0,0)',
                    '-webkit-transform': 'translate3d('+this.pos+'px,0,0)',
                    '-moz-transform': 'translate3d('+this.pos+'px,0,0)',
                }
            }
        },*/
        created: function(){
            //init options
            this.options = this.$parent.options || {
                loop: false,
                perSliders: 1,
                perGroup: 1,
                autoPlay: false,
                pagination: true
            };
        },
        mounted (){
            setTimeout(() => {
                if(this.options.height) {
                    this.otherStyle.height = this.options.height;
                }

                if(this.$parent.$el.offsetWidth) {
                    this.otherStyle.width = this.$parent.$el.offsetWidth / this.options.perSliders+'px';
                }

                if(!!this.options.loop) {
                    this.otherStyle.left = -this.$parent.$el.offsetWidth / this.options.perSliders+'px';
                }

            })
        },
        methods: {
            /*onClick: function(idx){
                this.$dispach('clickOne',idx)
            }*/
        },
        events: {
            resize: function(width){
                this.otherStyle.height = this.height;
                this.otherStyle.width = width/this.options.perSliders+'px';
                if(!!this.options.loop) {
                    this.otherStyle.left = -width/this.options.perSliders+'px';
                }
            }
        }
    }
</script>
<style lang='less'>
</style>
