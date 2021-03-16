/*
 * @Author: zhaoye 
 * @Date: 2017-01-12 17:25:48 
 * @Last Modified by: zhaoye
 * @Last Modified time: 2017-11-30 13:11:24
 */
<script>
    export default {
        data (){
            return {
                //translateX的值
                translateX: 0,
                //translateY的值
                translateY: 0,
                translate: 0,
                //上一帧X的位置
                lastX: 0,
                //上一帧Y的位置
                lastY: 0,
                //当前帧X的位置
                curX: 0,
                //当前帧Y的位置
                curY: 0,
                //每帧X的变动
                deltaX: 0,
                //每帧Y的变动
                deltaY: 0,
                delta: 0,
                //是否正在缓动
                easing: false,
                //最后5帧X方向的变化
                lastDeltaList:[],
                //是否正在滚动
                scrolling: false,
                isFirstFrame: false,
                scrollEvent: 'undefined',
                touchmoveDetectCnt: 0,
                lastDelta: 0,
            }
        },
        created () {
            this.renderFrame()
        },
        computed: {
            wrapperWidth () {
                if(this.options && this.options.wrapperWidth)return this.options.wrapperWidth
                if(this.$el){
                    return this.$el.offsetWidth
                }else{
                    return 0
                }
                //容器宽度
                //return this.options ? this.options.wrapperWidth || document.body.offsetWidth : document.body.offsetWidth;
            },
            transform () {
                if(this.direction === 'vertical'){
                    return {
                        // 'transform': 'translate3d(0, '+this.translate+'px, 0)',
                        // '-webkit-transform': 'translate3d(0, '+this.translate+'px, 0)',
                        // '-moz-transform': 'translate3d(0, '+this.translate+'px, 0)',
                        'transform': 'translate(0, '+this.translate+'px)',
                        '-webkit-transform': 'translate(0, '+this.translate+'px)',
                        '-moz-transform': 'translate(0, '+this.translate+'px)',
                    }
                }else{
                    return {
                        // 'transform': 'translate3d('+this.translate+'px, 0,0)',
                        // '-webkit-transform': 'translate3d('+this.translate+'px,0,0)',
                        // '-moz-transform': 'translate3d('+this.translate+'px,0,0)',
                         'transform': 'translate('+this.translate+'px, 0)',
                        '-webkit-transform': 'translate('+this.translate+'px,0)',
                        '-moz-transform': 'translate('+this.translate+'px,0)',
                    }    
                }
            },
            transition () {
                if(this.easing){
                    return {
                        'transition': 'transform .3s ease-out',
                        '-webkit-transition': '-webkit-transform .3s ease-out',
                        '-moz-transition': '-moz-transform .3s ease-out'
                    }
                }else{
                    return {
                        'transition': 'transform 0s',
                        '-webkit-transition': '-webkit-transform 0s',
                        '-moz-transition': '-moz-transform 0s'
                    }
                }
            }
        },
        methods: {
            //对手势滑动完，手指不动超过.1s时再离开屏幕，不进行缓动
            //TODO 需要关注性能
            renderFrame () {
                window.requestAnimationFrame(this.renderFrame)
                if(this.startCnt){
                    if(this.lastDelta == this.delta){
                        this.touchmoveDetectCnt++
                    }else{
                        this.touchmoveDetectCnt = 0
                    }
                    this.lastDelta = this.delta
                }else{
                    this.touchmoveDetectCnt = 0
                }
                
            },
            initSwiper () {
                this.scrollEvent = document.createEvent('HTMLEvents');
                this.scrollEvent.initEvent('scroll',true,false);
                this.scrollEvent.eventType = 'message';
                let lastPos = 0;
                let diff = 0;
                this.$watch('translate', (val) => {
                    // watch偏移属性的变化派发事件，通知图片懒加载
                    if(val != lastPos){
                        lastPos = val
                        diff++
                        if(diff == 5){
                           window.dispatchEvent(this.scrollEvent)
                           diff = 0
                        }
                    }
                })    
                
            },
            touchstart (e) {
                //关闭缓动
                this.easing = false
                //记录当前位置
                this.curX = e.touches[0].pageX
                this.curY = e.touches[0].pageY
                this.lastX = this.curX
                this.lastY = this.curY
                //清空列表
                this.lastDeltaList = []
                this.$emit('scrollStart', e)
                this.isFirstFrame = true;

                this.startCnt = true
            },
            touchmove (e) {
                //记录每一帧的位置
                this.curX = e.touches[0].pageX
                this.curY = e.touches[0].pageY
                //计算偏移
                this.deltaX = this.curX - this.lastX
                this.deltaY = this.curY - this.lastY

                this.delta = this.direction === 'horizontal' ? this.deltaX : this.deltaY

                if(this.lastDeltaList.length==5)
                    this.lastDeltaList.shift()
                this.lastDeltaList.push(this.delta)


                if(this.direction == 'horizontal'){
                    if(this.isFirstFrame){
                        if(Math.abs(this.deltaX) > Math.abs(this.deltaY)*2){
                            this.scrolling = true
                        }else{
                            this.scrolling = false
                        }
                    }
                }else if(this.direction == 'vertical'){
                    if(this.isFirstFrame){
                        //TODO 这块，需要判断的情况是，swiper嵌套scroller的时候，但是这个场景少，所以，先注释掉，后面再改
                        //if(Math.abs(this.deltaY) > Math.abs(this.deltaX) * 2){
                            this.scrolling = true
                        //}else{
                        //    this.scrolling = false
                        //}
                    }
                }
                this.isFirstFrame = false
                if(this.scrolling){
                    e.preventDefault()
                    this.$emit('scroll',e)
                }
                if(this.easing){
                    e.preventDefault()
                }
                if(this.iam == 'scroller'){
                    if (this.direction && this.direction == 'vertical') {
                        e.preventDefault();
                    }
                }
                //保存最后一帧位置
                this.lastX = this.curX;
                this.lastY = this.curY;
            },
            touchend (e) {
                if(!this.scrolling)return
                this.$emit('touchEnd')
                this.startCnt = false
                //开启缓动
                this.easing = true
                let sum = 0
                this.lastDeltaList.forEach( (delta) => {
                    sum += delta
                });
                //计算最后5帧平均值
                let average = sum / this.lastDeltaList.length
                //惯性滑动
                if(average && this.touchmoveDetectCnt/60< 0.1 )
                    this.translate += average*5
                this.$emit('scrollEnd',e)
            },
            transitionEnd () {
                //关闭缓动
                this.easing = false
                window.dispatchEvent(this.scrollEvent)
            },
        },
        mounted () {
            this.$el.addEventListener('webkitTransitionEnd', () => {
                this.transitionEnd();
            })
            this.$el.addEventListener('mozTransitionEnd', () => {
                this.transitionEnd();
            })
        }
    }
</script>
