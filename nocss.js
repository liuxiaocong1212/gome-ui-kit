/*
 * @Author: zhaoye
 * @Date: 2017-03-13 16:56:43
 * @Last Modified by: duantao-ds
 * @Last Modified time: 2018-09-04 16:23:01
 */
require('./components/less/reset.less')
/**
 * 自动媒体查询
 */
var dpr = document.documentElement.getAttribute('data-dpr') || 1
var width = document.documentElement.offsetWidth
var fontSize = 100/750 * width
document.querySelector('html').style.fontSize = (fontSize)+'px'
window.addEventListener('resize', function(){
    var width = document.querySelector('html').offsetWidth
    var fontSize = 100/750 * width
    document.querySelector('html').style.fontSize = (fontSize)+'px'
})
import Vue from 'vue'
import VueRouter from 'vue-router'
import Lazyload from 'gome-ui-lazyload'
Vue.use(Lazyload)
Vue.use(VueRouter)
import Toast from './components/toast/toast.js'

// Vue.use(Toast);

import CToast from './components/toast/toast.vue'
import Modal from './components/modal/modal.vue'
import CModal from './components/modal/modal.custom.vue'
import ModalMixin from './components/modal/modal.mixin.vue'
import Button from './components/button/button.vue'
import Scroller from './components/scroller/scroller.vue'
import Swiper from './components/swiper/swiper.vue'
import Slider from './components/swiper/slider.vue'
import CImage from './components/image/image.vue'
import Loading from './components/loading/loading.vue'
import Gotop from './components/gotop/gotop.vue'
import Timer from './components/timer/timer.vue'
import Product from './components/product/product.vue'
import Tag from './components/tag/tag.vue'
import ErrorDefault from './components/errorpage/error.vue'
import ErrorCustom from './components/errorpage/error.custom.vue'
import RadioGroup from './components/radio/radio.group.vue'
import RadioItem from './components/radio/radio.item.vue'
import RadioMixin from './components/radio/radio.mixin.vue'
import OptionItem from './components/option/option.vue'
import OptionMixin from './components/option/option.mixin.vue'
import Aside from './components/aside/aside.vue'
import Root from './components/root/root.vue'
import Page from './components/page/page.vue'
import Pagination from './components/swiper/pagination.vue'
import eventbus from 'gome-utils-eventbus'
import {env} from 'gome-utils-env'
import GomeJSBridge from 'gome-bridge-core'
import version from 'gome-utils-app-version'

import TabNav from './components/tabnav/tabnav.vue'
import Choose from './components/choose/choose.vue'

let isBridgeReady = false
let isLoadingViewShown = false

if (GomeJSBridge.ready) {
    GomeJSBridge.ready(() => {
        isBridgeReady = true
    })
}

const ErrorPage = {
    Default: ErrorDefault,
    Custom: ErrorCustom,
}

let loadings = [];
let nativeLoadingCnt = 0

eventbus.on('loading', () => {
    if (env.app && isBridgeReady && version >= 100) {
        if (!isLoadingViewShown) {
            isLoadingViewShown = true
            nativeLoadingCnt++
            GomeJSBridge.showLoadingView()
        }
    } else {
        loadings.push(new Loading())
    }
});


eventbus.on('loading.lazy', defferedTime => {
    if (env.app && isBridgeReady && version >= 100) {
        if (!isLoadingViewShown) {
            isLoadingViewShown = true
            nativeLoadingCnt++
            GomeJSBridge.showLoadingView()
        }
    } else {
        loadings.push(new Loading({data:{mode:'lazy', defferedTime: defferedTime || 700,}}))
    }
});

eventbus.on('loaded', () => {
    if (env.app && isBridgeReady && version >= 100) {
        setTimeout(() => {
            if (isLoadingViewShown) {
                isLoadingViewShown = false
                for (let i = 0; i < nativeLoadingCnt; i++) {
                    GomeJSBridge.hideLoadingView()
                }
                nativeLoadingCnt = 0
            }
        }, 100)
    }
    function recursiveShift() {
        if (loadings.length > 0) {
            loadings[0].$destroy()
            loadings.shift()
            recursiveShift()
        }
    }
    recursiveShift()
})

//以插件形式存在的Modal
Modal.install = function(Vue, options){
    let gomeModal
	const findRef = ($node) => {
		if ($node.$refs['gome-ui-kit-modal']) {
			return $node.$refs['gome-ui-kit-modal']
		} else {
			for (var i = 0; i < $node.$children.length; i++) {
				const result = findRef($node.$children[i])
				if(result)return result
			}
		}
		return null
	}
    Vue.prototype.$Modal = function(options, ok, cancel){
        this.$nextTick( () => {
            //恢复默认
            gomeModal = findRef(this.$root)
			if(!gomeModal)return
            gomeModal.htmlContent = ''
            gomeModal.content = ''
            gomeModal.title = ''
            gomeModal.ok = ''
            gomeModal.cancel = ''
            gomeModal.hasClose = false

            //显示
            gomeModal.show = true;
            //重新赋值
            for(var key in options){
                gomeModal[key] = options[key];
            }
            gomeModal.$on('ok',() => {
                if(typeof(ok) === 'function'){
                    if(ok()){
                        gomeModal.show = false
                    }
                }else{
                    gomeModal.show = false
                }
            })
            gomeModal.$on('cancel', () => {
                if(typeof(cancel) === 'function'){
                    if(cancel()){
                        gomeModal.show = false
                    }
                }else{
                    gomeModal.show = false;
                }
            })
        })
    }
    Vue.prototype.$Modal.close = function(){
        gomeModal.show = false
    }

}
Vue.use(Modal)
import ModalSPA from './components/modal/modal.spa.vue'
Vue.component('modal-spa', {
    name: 'modal',
    functional: true,
    render: (h) => {
        return h(ModalSPA, {ref: 'gome-ui-kit-modal'})
    }
})

// 注册全局组件
Vue.component('gui-button', Button)
Vue.component('gui-btn', Button)
Vue.component('gui-scroller', Scroller)
Vue.component('gui-modal', CModal)
Vue.component('gui-swiper', Swiper)
Vue.component('gui-slider', Slider)
Vue.component('gui-loading', Loading)
Vue.component('gui-gotop', Gotop)
Vue.component('gui-timer', Timer)
Vue.component('gui-product', Product)
Vue.component('gui-tag', Tag)
Vue.component('gui-error-page', ErrorPage.Custom)
Vue.component('gui-radio', RadioItem)
Vue.component('gui-choose', Choose)
Vue.component('gui-option', OptionItem)
Vue.component('gui-aside', Aside)
Vue.component('gui-page', Page)
Vue.component('gui-tab-nav', TabNav)
Vue.component('gui-image', CImage)
Vue.component('gui-img', CImage)
Vue.component('gui-pagination', Pagination)

export {
    Toast,
    CToast,
    Modal,
    CModal,
    ModalMixin,
    Button,
    Scroller,
    Swiper,
    Slider,
    Loading,
    Gotop,
    Timer,
    Product,
    Tag,
    ErrorPage,
    // deprecated
    RadioGroup,
    RadioItem,
    RadioMixin,
    OptionItem,
    OptionMixin,
    Aside,
    Root,
    Page,
    TabNav,
    CImage,
    Pagination,
    Choose,
}
export default {
    Toast,
    CToast,
    Modal,
    CModal,
    ModalMixin,
    Button,
    Scroller,
    Swiper,
    Slider,
    Loading,
    Gotop,
    Timer,
    Product,
    Tag,
    ErrorPage,
    RadioGroup,
    RadioItem,
    RadioMixin,
    OptionItem,
    OptionMixin,
    Aside,
    Root,
    Page,
    TabNav,
    CImage,
    Pagination,
    Choose,
};
