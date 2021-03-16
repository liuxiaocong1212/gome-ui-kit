/*
 * @Author: zhaoye
 * @Date: 2017-01-12 18:33:36
 * @Last Modified by: duantao-ds
 * @Last Modified time: 2018-09-05 17:59:34
 */
<template>
    <div class='swiper-container' @touchstart='touchStart' @touchend='touchEnd' @transitionEnd='transitionEnd'>
        <div class='swiper' :style='[transformY,transition,otherStyle]'>
            <slot name='slider'></slot>
        </div>
        <slot name="pagination"></slot>
    </div>
</template>

<script>
    import '../../utils.js'
    import eventbus from 'gome-utils-eventbus'
    module.exports = {
        props: ['list', 'options', 'cubic'],
        // props: {
        //     list: Array,
        // },
        data: function() {
            return {
                //原始列表
                originList: [],
                //touch开始的位置
                startPos: 0,
                //touch结束的位置
                endPos: 0,
                //上一帧的位置
                lastPos: 0,
                //当前帧的位置
                curPos: 0,
                //每帧的变动
                delta: 0,
                //上一帧的位置
                lastPosY: 0,
                //当前帧的位置
                curPosY: 0,
                //每帧的变动
                deltaY: 0,
                //是否正在缓动
                easing: true,
                //是否允许开启动画
                animating: false,
                //当前的索引
                idx: 0,
                //经过duplicate后列表的长度
                length: 0,
                //translateX的值
                translateX: 0,
                translateY: 0,
                //窗口的宽
                firstFrame: true, // ??
                scroll: false,
                //style
                otherStyle: {
                    'left': '0',
                    'height': '100%',
                    'width': 'auto'
                },
                disableScreenScroll: false, // ??
                frameCnt: 0, // ??
                allowVerticalScroll: false, // ??
                atBottom: false, // ??
                computeVerticalScroll: false, // ???
                /**
                 * 自动播放播放中
                 */
                playing: false,
            }
        },
        computed: {
            /**
             * @description 窗口高度的 10%? 干嘛用的
             */
            btmToNextLimit: function() {
                return 0.1 * document.documentElement.clientHeight
            },

            /**
             * @desc 获取一个屏幕可以展示perSliders张图片后, 会出现多少屏
             */
            pageCount: function() {
                var pageCount = this.originList.length / parseInt(this.options.perSliders);
                return Math.ceil(pageCount);
            },

            /*transform: function(){
                return {
                    'transform': 'translate3d('+this.translateX+'px, 0,0)',
                    '-webkit-transform': 'translate3d('+this.translateX+'px,0,0)',
                    '-moz-transform': 'translate3d('+this.translateX+'px,0,0)',
                }
            },*/

            /**
             * @desc 通过 translateX 和 translateY 来确定容器在什么位置
             */
            transformY: function() {
                return {
                    'transform': 'translate3d(' + this.translateX + 'px, ' + this.translateY + 'px,0)',
                    '-webkit-transform': 'translate3d(' + this.translateX + 'px, ' + this.translateY + 'px,0)',
                    '-moz-transform': 'translate3d(' + this.translateX + 'px, ' + this.translateY + 'px,0)',
                }
            },

            /**
             * @description 判断是否使用过渡效果 easing 来判断 true 过渡效果, false 没有过渡效果
             */
            transition: function() {
                if (this.easing) {
                    return {
                        'transition': 'transform .3s ',
                        '-webkit-transition': '-webkit-transform .3s',
                        '-moz-transition': '-moz-transform .3s'
                    }
                } else {
                    return {
                        '-webkit-transition': '-webkit-transform 0s',
                        '-moz-transition': '-moz-transform 0s',
                        'transition': 'transform 0s',
                    }
                }
            },

            /**
             * @desc 每一屏 的宽度
             */
            listWidth: function() {
                return this.$el.offsetWidth || 0 //this.wrapperWidth/this.options.perSliders * this.originList.length || 0;
            },

            // 同上
            wrapperWidth: function() {
                return this.$el.offsetWidth || 0 //this.options.wrapperWidth;
            },

            // 自定义一个 scroll 事件
            scrollEvent: function() {
                var event = document.createEvent('HTMLEvents');
                event.initEvent('scroll', true, false)
                event.eventType = 'message'
                return event;
            }
        },
        created: function() {

            console.log(this.scrollTo);
            //init
            window.addEventListener('scroll', e => {
                if (this.disableScreenScroll) {
                    e.preventDefault();
                }
            });

            document.addEventListener('touchmove', e => {
                if (this.disableScreenScroll)
                    e.preventDefault();
            }, {
                passive: false
            })
            // this.$watch('list', () => {
            //     this.setup()
            // })
        },
        mounted: function() {
            this.setup()
            this.$el.addEventListener('touchmove', this.touchMove)
            this.$el.addEventListener('webkitTransitionEnd', () => {
                this.transitionEnd();
            })
            this.$el.addEventListener('mozTransitionEnd', () => {
                this.transitionEnd();
            })
        },
        events: {
            scrollTo: function(idx) {
                if (idx != this.idx) {
                    this.scrollTo(idx)
                }
            }
        },
        methods: {

            setup() {
                //clone list
                //init options
                this.options = this.options || {
                    loop: false,
                    perSliders: 1,
                    perGroup: 1,
                    autoPlay: false,
                    pagination: true,
                    height: 'auto',
                    allowVerticalScroll: true
                };

                // 是否传入高度
                if (!!this.options.height) {
                    this.otherStyle.height = this.options.height;
                }

                // 如果是循环，则首尾重复
                if (!!this.options.loop) {

                    this.originList = []

                    this.list.forEach((item, idx) => {
                        if (idx !== 0 && idx !== this.list.length - 1) {
                            this.originList.push(item)
                        }
                    })

                } else {

                    this.originList = this.list;

                }
                // console.log('origin ==>> ', this.originList)
                // console.log('lsit ===>> ',  this.list)

                // 循环盒子的个数
                this.length = this.originList.length;

                //this.otherStyle.width = (this.wrapperWidth/this.options.perSliders*this.list.length)+'px'

                //是否自动播放
                if (!!this.options.autoPlay && !this.playing) {
                    this.autoPlay()
                }

                //检测当前的索引值
                this.$watch('idx', function(idx) {
                    eventbus.emit('swiper.idxChange', idx, this._uid)
                })

                var renderFrame = () => {
                    window.dispatchEvent(this.scrollEvent)
                    if (this.animating) {
                        window.requestAnimationFrame(renderFrame)
                    }
                }

                /**
                 * @description 监听 animating
                 */
                this.$watch('animating', val => {
                    if (val) {
                        window.requestAnimationFrame(renderFrame)
                    }
                })
                // this.scrollTo(0)
            },

            autoPlay(time) {

                this.playing = true

                this.frameCnt = 0;

                const renderFrame = () => {
                    if (this.easing) {
                        this.frameCnt++
                        if (this.frameCnt == 60 * 5) {
                            this.frameCnt = 0;
                            this.next();
                        }
                    }
                    requestAnimationFrame(renderFrame)
                }
                requestAnimationFrame(renderFrame)
            },

            // 向前
            prev() {
                if (!!this.options.loop) {
                    this.idx = (this.idx === -1) ? this.length - 1 : this.idx - 1;
                }
                else {
                    this.idx = (this.idx == 0) ? this.idx : this.idx - 1;
                }
                this.scrollTo(this.idx);
            },

            // 向后
            next() {
                if (!!this.options.loop) {
                    this.idx = (this.idx == this.length) ? 0 : this.idx + 1;
                }
                else {
                    this.idx = (this.idx == this.pageCount - 1) ? this.idx : this.idx + 1;
                }

                this.scrollTo(this.idx);
            },

            scrollTo(idx) {

                this.animating = true; // 开启动画

                this.idx = idx;

                var initPos = this.translateX;

                var targetPos = -this.wrapperWidth / this.options.perSliders * Math.floor(this.options.perSliders) * idx;

                var delta = Math.floor((targetPos - initPos));

                if (!this.options.loop && this.idx == this.pageCount - 1 && this.pageCount > 1) {
                    this.translateX = -this.listWidth + this.wrapperWidth;
                }
                else {
                    this.translateX += delta;
                }

                //if(Math.abs(this.translateX - targetPos) > 6)
                //    requestAnimationFrame(renderFrame)
                //else
                this.translateX = targetPos;

                this.$emit('scrollAt', idx);

                eventbus.emit('swiper.scrollTo', idx, this._uid); // ???
            },

            touchStart(e) {
                if (this.options && this.options.dontDrag) return; // dontDrag 不能拖

                // 如果动画开启就立即结束
                if (this.animating) {
                    this.transitionEnd()
                }

                // 手指碰触所有在坐标
                this.delta = 0;
                this.easing = false; // 缓动关闭

                this.curPos = e.touches[0].pageX; // 当前触碰的位置X
                this.lastPos = this.curPos; // 同步到最后的位置X
                this.startPos = this.curPos; // 同步到开始的位置X
                this.curPosY = e.touches[0].pageY; // 当前触碰的位置 Y
                this.lastPosY = this.curPosY; // 同步到最后的位置 Y

                this.firstFrame = true; // ???

                // if(this.options.loop && this.animating)return;
                this.animating = false; // 动画关闭

                if (this.idx === this.length) {
                    this.idx = 0;
                    //this.scrollTo(this.idx);
                } else if (this.idx === -1) {
                    this.idx = this.length - 1;
                    this.scrollTo(this.idx);
                }

                if (this.allowVerticalScroll) {
                    if (window.screen.availHeight >= document.body.getBoundingClientRect().bottom) {
                        this.atBottom = true
                    } else {
                        this.atBottom = false
                    }
                }
            },

            touchMove(e) {

                if (this.options && this.options.dontDrag) return; // 不能拖拽

                //if(this.options.loop && this.animating)return;
                if (this.list.length === 1) return;  // 只有一张时关闭

                this.animating = false; // 动画关闭
                this.easing = false; // 缓动关闭

                this.curPos = e.touches[0].pageX; // 设置当前碰触位置 X

                this.delta = this.curPos - this.lastPos; // 当前位置和最后位置的差 X

                this.lastPos = this.curPos;  // 更新当前位置 X

                this.curPosY = e.touches[0].pageY; // 设置当前位置 Y
                this.deltaY = this.curPosY - this.lastPosY; // 当前位置和最后位置的差 Y
                this.lastPosY = this.curPosY; // 更新当前位置 Y

                if (this.firstFrame) {

                    if (!this.delta || !this.deltaY) {
                        e.preventDefault();
                    }

                    if (Math.abs(this.delta) * 0.5 > Math.abs(this.deltaY)) {
                        this.scroll = true;
                        e.preventDefault();
                        this.disableScreenScroll = true;
                    } else {
                        this.scroll = false;
                        if (this.deltaY < 0) {
                            this.computeVerticalScroll = true
                        } else {
                            this.computeVerticalScroll = false
                        }
                        this.disableScreenScroll = false;
                    }
                }

                if (this.scroll) {
                    if (this.translateX > 0) {
                        this.translateX += this.delta / 2;
                    } else if (this.translateX < -(this.listWidth - this.wrapperWidth)) {
                        this.translateX += this.delta / 2;
                    } else {
                        this.translateX += this.delta;
                    }
                    this.endPos = this.curPos; // 更新 结束的位置就是现在的位置

                } else if (this.atBottom && this.computeVerticalScroll && this.allowVerticalScroll) {
                    e.preventDefault();
                    this.translateY += this.deltaY / 2;
                    if (this.btmToNextLimit > Math.abs(this.translateY)) {
                        eventbus.emit('swiper.isBtmToNextOk', false, this._uid); // ??
                    } else {
                        eventbus.emit('swiper.isBtmToNextOk', true, this._uid); // ??
                    }
                }
                this.firstFrame = false;
            },

            touchEnd(e) {
                if (this.options && this.options.dontDrag) return; // 不能拖拽

                this.disableScreenScroll = false;

                // if(this.options.loop && this.animating)return;
                this.easing = true;  // 缓动开启

                if (!this.scroll && this.atBottom && this.allowVerticalScroll) {
                    this.atBottom = false
                    if (this.btmToNextLimit < Math.abs(this.translateY) && (this.translateY < 0)) {
                        eventbus.emit('swiper.btmToNext', this._uid)
                    }
                    this.translateY = 0
                }

                if (!this.scroll) {
                    return
                }

                if (Math.abs(this.delta) == 0) {
                    this.scrollTo(this.idx)
                    return
                }

                var delta = this.endPos - this.startPos; // 滑动的距离

                if (delta < -.1 * this.wrapperWidth) {
                    this.next();
                }
                else if (delta > .1 * this.wrapperWidth) {
                    this.prev();
                }
                else {
                    this.scrollTo(this.idx)
                }
            },

            transitionEnd() {

                this.frameCnt = 0

                if (this.idx === this.length) {
                    this.easing = false; // 缓动关闭
                    this.idx = 0;
                    this.scrollTo(this.idx);

                    setTimeout(_ => {
                        this.easing = true; // 缓动开启
                        this.animating = false; // 动画关闭
                    }, 50);

                } else if (this.idx === -1) {

                    this.easing = false; // 缓动关闭
                    this.idx = this.length - 1;
                    this.scrollTo(this.idx);

                    setTimeout(_ => {
                        this.easing = true;
                        this.animating = false;
                    }, 50);

                } else {

                    this.animating = false;

                }
            }
        }
    }

    /**
     * @description 如果是循环，则首尾重复, swiper 循环时使用
     * @returns {Array}
     */
    module.exports.loop = function(list) {
        const loopedList = []
        const length = list.length
        loopedList.push(list[list.length - 1])
        list.forEach((item, index) => {
            loopedList.push(item)
        })
        loopedList.push(list[0])
        return loopedList
    }

</script>

<style lang='less'>
    @import '../less/var.less';
    @import '../less/layout.less';
    .swiper-container {
        overflow: hidden;
        position: relative;
        height: 100%;
        .swiper {
            display: -webkit-box;
            display: -moz-box;
            position: relative;
            li {
                position: relative;
                height: 100%;
                div {
                    width: 100%;
                }
            }
        }
        .swiperU {
            height: 0.1rem;
            position: absolute;
            bottom: 0.4rem;
            left: 50%;
            li {
                float: left;
                width: 0.1rem;
                height: 0.1rem;
                border-radius: 50%;
                background: #fff;
                margin-left: 0.1rem;
            }
            .active {
                background: red;
            }
        }
    }
</style>
