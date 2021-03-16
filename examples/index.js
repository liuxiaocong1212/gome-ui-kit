/*
 * @Author: zhaoye 
 * @Date: 2017-01-18 20:58:15 
 * @Last Modified by: zhaoye
 * @Last Modified time: 2017-12-13 10:44:39
 */
import Vue from 'vue';
import VueRouter from 'vue-router';
import Vuex from 'vuex';
import FastClick from 'fastclick';

Vue.use(VueRouter);
Vue.use(Vuex);



import {Root, ErrorPage} from 'gome-ui-kit';

import Index from './comps/index.vue';
import PageDemo from './comps/page.vue';
import ButtonDemo from './comps/button.vue';
import RadioDemo from './comps/radio.vue';
import OptionDemo from './comps/option.vue';
import ScrollerDemo from './comps/scroller.vue';
import SwiperDemo from './comps/swiper.vue';
import AsideDemo from './comps/aside.vue';
import ToastDemo from './comps/toast.vue';
import ModalDemo from './comps/modal.vue';
import TabnavDemo from './comps/tabnav.vue';
import ImageDemo from './comps/image.vue';
import ChooseDemo from './comps/choose.vue';

import eventbus from 'gome-utils-eventbus';
eventbus.emit('loading', 0)
eventbus.emit('loading', 100)
eventbus.emit('loading', 200)
eventbus.emit('loading', 300)
eventbus.emit('loading', 400)
setTimeout(() => {
    eventbus.emit('loaded')
},2000)

const router = new VueRouter({
  routes: [
      {
        path: '/',
        component: Index,
      },
      {
        path: '/page',
        component: PageDemo,
      },
      {
        path: '/toast',
        component: ToastDemo,
      },
      {
        path: '/modal',
        component: ModalDemo,
      },
      {
        path: '/button',
        component: ButtonDemo,
      },
      {
        path: '/radio',
        component: RadioDemo,
      },
      {
        path: '/option',
        component: OptionDemo,
      },
      {
        path: '/scroller',
        component: ScrollerDemo,
      },
      {
        path: '/swiper',
        component: SwiperDemo,
      },
      {
        path: '/aside',
        component: AsideDemo,
      },
      {
        path: '/tabnav',
        component: TabnavDemo,
      },
      {
        path: '/image',
        component: ImageDemo,
      },
      {
        path: '/choose',
        component: ChooseDemo,
      }
  ],

});


const app = new Root({
    el: '#app',
    router,
    //store,
});