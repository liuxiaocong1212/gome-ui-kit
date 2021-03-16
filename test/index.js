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

var testsContext = require.context(".", true, /\.test\.js$/);
testsContext.keys().forEach(testsContext);