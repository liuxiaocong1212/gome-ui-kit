/*
 * @Author: duantao-ds
 * @Date: 2018-08-30 15:02:36
 * @Last Modified by: duantao-ds
 * @Last Modified time: 2018-08-31 14:45:58
 */

import Vue from 'vue';

import {mount} from '@vue/test-utils';

import Button from '../../components/button/button.vue';

let wrapper = null;  // 实例包裹器
let vm = null; // vue 的实例
let element = null; // 根节点

import {
    expect
} from 'chai';


describe('Button 组件相关测试', () => {

    describe('测试钩子函数', () => {

        it('computed', () => {
            expect(Button.computed.disabled).to.be.an('function');
        })

        it('data', () => {
            expect(Button.data).to.be.an('function');
        })
    });

    describe('属性测试', () => {

        it('测试 href  属性', () => {
            wrapper = mount(Button, {
                propsData: {href: 'https://www.gome.com.cn/'}
            });
            expect(wrapper.element.href).to.be.equal('https://www.gome.com.cn/')
        });
    });

    describe('方法测试', () => {

        describe('disabled 状态测试', () => {

            // 测试前
            beforeEach(() => {
                wrapper = mount(Button);
                vm = wrapper.vm;
                element = wrapper.element;
                element.classList.add('disabled');
            });

            it('touchstart && touchend', () => {
                expect(vm.disabled).to.be.ok;
                expect(vm.hover).to.be.equal('');
                wrapper.trigger('touchstart');
                expect(vm.hover).to.be.equal('');

                wrapper.trigger('touchend');
                expect(vm.hover).to.be.equal('');
            });

        });

        describe('非 disabled 状态', () => {
            // 测试前
            beforeEach(() => {
                wrapper = mount(Button);
                vm = wrapper.vm;
                element = wrapper.element;
            });

            it('touchstart && touchend', () => {
                expect(vm.disabled).to.not.be.ok;
                expect(vm.hover).to.be.equal('');
                wrapper.trigger('touchstart');
                expect(vm.hover).to.be.equal('hover');

                wrapper.trigger('touchend');
                expect(vm.hover).to.be.equal('');

            });
        });
    });


    describe('slot 测试', () => {
        beforeEach(() => {
            wrapper = mount(Button, {
                slots: {
                    default: `<div>hello world</div>`
                }
            });
            vm = wrapper.vm;
            element = wrapper.element;
        });

        it('slot', () => {
            expect(wrapper.find('div')).to.be.ok;
        })
    })

     /**
     * @description 样式需要测试(TODO)
     * */

    // describe('class 类名测试(样式不知到怎么测)', () => {

    //     // 测试前
    //     beforeEach(() => {
    //         wrapper = mount(Button);
    //         element = wrapper.element;
    //     });

    //     it('default类名测试', () => {
    //         element.classList.add('default');
    //         let testCssProp = window.getComputedStyle(element).width;
    //         expect(element.className).to.be.equal('btn default');
    //     })
    // });
})
