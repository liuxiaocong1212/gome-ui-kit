/*
 * @Author: zhaoye
 * @Date: 2017-01-12 17:32:38
 * @Last Modified by: duantao-ds
 * @Last Modified time: 2018-09-03 16:44:21
 */
import Toast from './toast.vue'
import eventbus from 'gome-utils-eventbus'

let cid = 0;
let list = [];

function toast(options) {

    let opt = {
        defaultType: 'center',
        duration: 1000,
        text: ''
    };

    if (typeof(options) === 'object') {
        for(let props in options) {
            opt[props] = options[props];
        }
    }
    else {
        opt.text = options;
    }

    if(list.length>0){
        list[0].$destroy()
    }

    var $container = document.createElement('div');

    $container.id = 'toast-cid-'+cid

    document.body.appendChild($container);

    let toastInstance = new Toast({
        el: '#'+$container.id,
        data: {
            text: opt.text,
            default: opt.defaultType,
            duration: opt.duration
        },
        destroyed() {
            list.shift()
            this.$el.parentNode.removeChild(this.$el)
        }
    })
    list.push(toastInstance)
    cid++;
    return toastInstance;
}

/**
 * 事件总线, 解耦 toast 事件的触发
 * 不单单只是 vue 的项目
 * 其他项目也用相同的方式 触发 toast 事件
 * eg : eventbus.emit('toast', '触发 toast')
*/
eventbus.on('toast', (options) => {
    toast(options)
});


export default toast;
