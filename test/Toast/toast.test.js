/*
 * @Author: duantao-ds
 * @Date: 2018-08-31 17:42:34
 * @Last Modified by: duantao-ds
 * @Last Modified time: 2018-09-03 18:02:25
 */

import Vue from 'vue';

import {
    mount
} from '@vue/test-utils';

import ToastTest from './toast.test.vue';
import Toast from '../../components/toast/toast';
import eventbus from 'gome-utils-eventbus'

let wrapper = null; // 实例包裹器
let vm = null; // vue 的实例
let element = null; // 根节点
let toastTpl = null;

import {
    expect
} from 'chai';


describe('Toast 组件测试', () => {

    describe('最基础的调用', () => {

        beforeEach(() => {
            wrapper = mount(ToastTest);
            vm = wrapper.vm;
            element = wrapper.element;
        });


        it('多个 toast 不能共存', () => {
            expect(document.querySelector('.toast-container')).to.not.exist;
            new Toast('测试1')
            new Toast('测试2');
            expect(document.querySelectorAll('.toast-container').length).to.be.equal(1);
            expect(vm.test).to.be.equal('000');
            expect(document.querySelector('.toast-container')).to.exist;
        });
    });

    describe('最基础的调用延迟', () => {

        beforeEach(() => {
            wrapper = mount(ToastTest);
            vm = wrapper.vm;
            element = wrapper.element;
        });

        afterEach(() => {
            expect(vm.test).to.be.equal('111');
        })


        it('回调函数', (done) => {

            new Toast('回调').$on('destroy', () => {
                vm.test = '111';
                done();
            })

            expect(vm.test).to.be.equal('000');
        });
    });

    describe('可配置的调用', () => {

        beforeEach(() => {
            wrapper = mount(ToastTest);
            vm = wrapper.vm;
            element = wrapper.element;
        });

        afterEach(() => {
            expect(vm.test).to.be.equal('111');
        })


        it('回调函数', (done) => {

            new Toast({
                text: 'https: 1324234;'
            }).$on('destroy', () => {
                vm.test = '111';
                done();
            })

            expect(vm.test).to.be.equal('000');
        });
    });

    describe('测试 eventbus 方法调用', () => {
        beforeEach(() => {
            wrapper = mount(ToastTest);
            vm = wrapper.vm;
            element = wrapper.element;
            eventbus.emit('toast', '测试');
        });

        it('eventbus 触发', () => {

            expect(document.querySelector('.toast-container'))
        });
    })
});
