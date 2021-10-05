<template>
    <div>
        <button class="btn_menu" v-touch:tap="activMenu" >x</button>

        <menu v-if="showMenu">
            <router-link exact-path :to="{name: 'home'}">на главную</router-link>
            <router-link :to="{name: 'faq'}">FAQ</router-link>
            <router-link :to="{name: 'tarifs'}">Тарифы</router-link>
            
            <router-link :to="{name: 'enterPhone', params: { parendPhone: phone } }" >Телефон</router-link>
            <router-link :to="{name: 'enterCode'}">Ввод-кода</router-link>
            <router-link :to="{name: 'payment'}">Оплата</router-link>
            <router-link :to="{name: 'tarif'}">Тариф</router-link>
            <router-link :to="{name: 'paid'}">Оплачено</router-link>
        </menu>

        <div class="app">
            <router-view 
            @onValidate="onValidate"
            ></router-view>
        </div>
        <img style="display:none" src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d4807.195341251782!2d36.0138421!3d52.95566200000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2sru!4v1629528209841!5m2!1sru!2sru" alt="" srcset="">
    </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      showMenu: false,
      phone: '',
      validadePhone: false
    };
  },
  methods: {
    activMenu(oe) {
      this.showMenu = !this.showMenu;
      if (this.showMenu) {
        oe.target.innerText = 'x';
      } else {
        oe.target.innerText = 'v';
      }
    },
    onValidate(oe){
        this.phone = oe.number
    }
  }
};
</script>

<style>
@font-face {
  font-family: 'SFUIText';
  src: url('assets/fonts/sfuitext/sfuitext/SFUIText-Regular.woff2')
      format('woff2'),
    url('assets/fonts/sfuitext/sfuitext/SFUIText-Regular.woff') format('woff');
  font-weight: normal;
  font-style: normal;
  font-display: auto;
}
@font-face {
  font-family: 'SFUIText';
  src: url('assets/fonts/sfuitext/sfuitext-bold/SFUIText-Bold.woff2')
      format('woff2'),
    url('assets/fonts/sfuitext/sfuitext-bold/SFUIText-Bold.woff') format('woff');
  font-weight: bold;
  font-style: normal;
  font-display: auto;
}
@font-face {
  font-family: 'SFUITextt';
  src: url('assets/fonts/sfuitext/sfuitext-italic/SFUIText-RegularItalic.woff2')
      format('woff2'),
    url('assets/fonts/sfuitext/sfuitext-italic/SFUIText-RegularItalic.woff')
      format('woff');
  font-weight: normal;
  font-style: italic;
  font-display: auto;
}
@font-face {
  font-family: 'SFUITextt';
  src: url('assets/fonts/sfuitext/sfuitext-bold-italic/SFUIText-BoldItalic.woff2')
      format('woff2'),
    url('assets/fonts/sfuitext/sfuitext-bold-italic/SFUIText-BoldItalic.woff')
      format('woff');
  font-weight: bold;
  font-style: italic;
  font-display: swap;
}
input[type="number"] {
	-moz-appearance: textfield;
	-webkit-appearance: textfield;
	appearance: textfield;
}
 
input[type="number"]::-webkit-outer-spin-button,
input[type="number"]::-webkit-inner-spin-button {
	display: none;
}
a {
  text-decoration: none;
}
.bigH1{
    font-weight: bold;
    font-size: 24px;
}
b{
  font-weight: bold;
}
.br414 {
  display: block;
}
.cursor{
  cursor: pointer
}
.grey, .index{
  background: rgba(0, 0, 0, 0.2);
}
.greyColor{
  color: rgba(0, 0, 0, 0.5)
}

.w100 {
  width: 100%;
  margin-top: 16px;
}
.mt_auto{
  margin-top: auto;
}
.mb_auto {
  margin-bottom: auto;
}
.psevdo_btn.activ_color, .index.active {
  background: rgb(102, 184, 81);
  color: #ffffff;
}
.psevdo_btn.activ_color_disabled {
  background: rgba(102, 184, 81, .5);
  border: none;
  color: #ffffff;
}
.activ_color_font{
  color: rgb(102, 184, 81);;
}
.app,
menu {
  max-width: 414px;
  width: 100%;
  margin: 0 auto;
}
menu {
  padding: 20px 0;
}
menu a {
  margin-right: 10px;
}
.app {
  height: 100vh;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
  padding: 20px 15px 32px;
  font-family: 'SFUIText';
  line-height: 20px;
  font-size: 16px;
  position: relative;
}
.component {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: unset;
}
.component .logo {
  width: 84px;
  margin: 0 auto;
  display: block;
}
.btn_menu {
  position: fixed;
  top: 0;
  right: 0;
  padding: 15px;
  background: rgb(102, 184, 81);
  color: white;
}
</style>
