/*
 * @Author: zhaoye 
 * @Date: 2017-01-09 14:05:19 
 * @Last Modified by: zhaoye
 * @Last Modified time: 2017-12-11 21:47:08
 */
// import '!style!css!less!./components/less/reset.less'
import './utils.js'
// import 'core-js/fn/map.js'
import 'gome-polyfill-promise'
export * from './nocss.js'
import FastClick from 'fastclick'
FastClick.attach(document.body)
import GomeUIKit from './nocss.js'
export default GomeUIKit