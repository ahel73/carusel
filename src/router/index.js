import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from '@/views/Home';
import Faq from '@/views/Faq';
import Tarifs from '@/views/Tarifs';
import EnterPhone from '@/views/EnterPhone';
import EnterCode from '@/views/EnterCode';
import Payment from '@/views/Payment';
import Tarif from '@/views/Tarif';
import Paid from '@/views/Paid';
import Maps from '@/views/Map';
import How from '@/views/How';
import Finish from '@/views/Finish';
import Regulations from '@/views/Regulations'; 
import Parking from '@/views/Parking';
import End from '@/views/End';
import PaymentTerminal from '@/views/PaymentTerminal'; 

Vue.use(VueRouter);

const routes = [
  {
    path: '/enter-code',
    name: 'enterCode',
    component: EnterCode,
    props: true 
  },
  {
    path: '/',
    name: 'enterPhone',
    component: EnterPhone,
    props: true 
  },
  
  {
    path: '/home',
    name: 'home',
    component: Home
  },
  {
    path: '/faq',
    name: 'faq',
    component: Faq
  },
  {
    path: '/tarifs',
    name: 'tarifs',
    component: Tarifs
  },
  {
    path: '/payment',
    name: 'payment',
    component: Payment
  },
  {
    path: '/tarif',
    name: 'tarif',
    component: Tarif
  },
  {
    path: '/paid',
    name: 'paid',
    component: Paid
  },
  {
    path: '/map',
    name: 'map',
    component: Maps
  },
  {
    path: '/how',
    name: 'how',
    component: How,
    props: true
  },
  {
    path: '/finish',
    name: 'finish',
    component: Finish
  },
  {
    path: '/parking',
    name: 'parking',
    component: Parking
  },
  {
    path: '/end',
    name: 'end',
    component: End 
  },
  {
    path: '/payment-terminal',
    name: 'paymentTerminal',
    component: PaymentTerminal 
  },
  {
    path: '/regulations',
    name: 'regulations',
    component: Regulations 
  },
];

const router = new VueRouter({
  routes,
  mode: 'history'
});

export default router;
