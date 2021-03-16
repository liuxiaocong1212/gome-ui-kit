/*
 * @Author: zhaoye 
 * @Date: 2017-01-18 15:02:10 
 * @Last Modified by: zhaoye
 * @Last Modified time: 2017-12-13 14:33:25
 */
//import '!style!css!less!./components/less/reset.less';
import {Gotop, Timer, Root, Toast, Modal, ErrorPage} from './index.js'
//scroller
/*import Scroller from './test/test.scroller.vue';
new Scroller({
    el: '#wrapper'
});*/
//new Toast('1111')
//router
import App from './test/test.router.vue';

import Foo from './test/test.routerFoo.vue';
import Bar from './test/test.routerBar.vue';
import Baz from './test/test.routerBaz.vue';

/*
const router = new VueRouter({
    routes: [
        {
            path: '/',
            component: App
        },
        {
            path: '/foo',
            component: Foo,
        },
        {
            path: '/foo/bar',
            component: Bar,
        },
        {
            path: '/foo/baz',
            component: Baz,
        }
    ]
});

const app = new Root({
    router,
}).$mount('#app');
*/
//cimage
/*import CImage from './components/image/image.vue';

const app = new Vue({
    template: `
        <cimage :img-src="'http://img.gomein.net.cn/image/bbcimg/production_image/nimg/201604/10/15/27/135e644eca9796b89e_400.jpg'"></cimage>
    `,
    el: '#app',
    components: {
        'cimage': CImage,
    },
})*/

//loading
/*import loading from './components/loading/loading.vue';

const app = new loading()
setTimeout(() => {
  app.$destroy();
},4000)*/

/*new Modal({
    data: {
        title: '11',
        content:　'11fffaf',
        ok: '11',
        cancel: '123',
    }
})*/

//gotop
//import gotop from './components/gotop/gotop.vue';
const gotop = new Gotop()

//timer
const timer = new Vue({
    template: `
        <div>
            <div>timer</div>
            <timer @timerEnd="onTimerEnd"  :time-left="'200000000'" :endContent="'方法'" :has-postfix="'true'"></timer>
        </div>
    `,
    el: '#timer',
    components: {
        'timer': Timer
    },
    methods: {
        onTimerEnd () {
            console.log(100)
        }  
    }
});
//product
import Product from './test/test.product.vue';
const product = new Product({
    el: '#product'
})

//error 
var a = '2';
var store =  [
                {
                    content: '123',
                    img: 'http://img.gomein.net.cn/image/bbcimg/production_image/nimg/201607/09/16/06/16292187ae72154cdec5_80.jpg',
                },
                {
                    content: '456',
                    isActive: true,
                    img: 'http://img.gomein.net.cn/image/bbcimg/production_image/nimg/201607/09/16/06/16292187ae72154cdec5_400.jpg',
                }
            ];

const optionData = [
                {
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
            ];

import Option from './test/test.option.vue';
const option = new Option({
    el: "#option",
    data: {
        data: optionData
    }
});

const radioData = [
                {
                    content: '白菜',
                    isActive: true,
                },
                {
                    content: '芹菜',
                    isActive: false,
                },
                {
                    content: '菠菜',
                    isActive: false,
                }
            ];
import Radio from './test/test.radio.vue';
const radio = new Radio({
    el: '#radio',
    data () {
        return {
            data: radioData
        }
    }
})


//aside

import Aside from './test/test.aside.vue';

const aside = new Aside ({
    el: 'aside',
    data () {
        return {
            
        }
    }
})

import Swiper from './test/test.swiper.vue';

const swiper = new Swiper ({
    el: '#swiper',
    data () {
        return {
            
        }
    }
})