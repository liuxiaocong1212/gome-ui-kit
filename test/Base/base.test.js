/*
 * @Author: zhaoye
 * @Date: 2018-01-05 15:11:28
 * @Last Modified by: duantao-ds
 * @Last Modified time: 2018-08-30 14:59:43
 */


import Vue from 'vue'
import Base from './base.test.vue'
// import Base from '../components/base.vue';
import {expect} from 'chai';

// const expect = chai.expect
describe('base组件-mount', () => {
    let vm
    beforeEach(function(){
        vm = new Base()
    })
    afterEach(function(){
        vm.$destroy()
        vm = null
    })
    it('#mountMyself', done => {
        vm.mountMyself()
        expect(vm).to.be.a('object')
        expect(vm).to.have.property('mountMyself')
        setTimeout(() => {
            expect(document.querySelector('#base-test')).to.exist
            done()
        })
    })
    it('#mountMyself2', () => {
        vm.mountMyself2()
        expect(vm).to.be.a('object')
        expect(vm).to.have.property('mountMyself')
        expect(document.querySelector('#base-test')).to.exist
    })
})
describe('base组件-destroy', () => {
    let vm
    beforeEach(function(){
        vm = new Base()
        vm.mountMyself2()
    })
    it('#afterDestroy', () => {
        vm.$destroy()
        expect(vm).to.be.a('object')
        expect(vm.$el).to.exist
        expect(document.querySelector('#base-test')).to.not.exist
    })
    it('#destroyMyself', () => {
        vm.destroyMyself()
        expect(vm).to.be.a('object')
        expect(vm).to.have.property('mountMyself')
        expect(document.querySelector('#base-test')).to.not.exist
    })
})
