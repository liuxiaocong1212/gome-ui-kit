/*
 * @Author: zhaoye 
 * @Date: 2018-01-05 15:11:28 
 * @Last Modified by: zhaoye
 * @Last Modified time: 2018-01-05 19:59:02
 */

require('../components/less/reset.less')
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


import Aside from './test.aside.vue'

const div = document.createElement('div')
div.id = 'app'
document.body.appendChild(div)

const vm = new Vue({
    render: h => h(Aside)
}).$mount()
const expect = chai.expect
describe('初始化', () => {
    it('成功', () => {
        expect(vm.$el.querySelector('.aside-container')).to.not.null
    })
})
describe('方法', () => {

})