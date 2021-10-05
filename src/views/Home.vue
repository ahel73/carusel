<template>
  <div class="home component">
    <img class="logo" src="@/assets/images/full-logo/86.png" alt="" />
    <h1>
      Добро пожаловать!
    </h1>
    <p>
      Нажмите «Начать», чтобы авторизоваться <span class="br414"></span> и
      забронировать самокат и начать поездку!
    </p>
    <div class="kntnt_btn">
      <app-button 
        toName="faq" 
        value="FAQ" 
      />
      <app-button 
        toName="tarifs" 
        value="Тарифы" 
      />
      <app-button 
        class="w100 activ_color" 
        toName="enterPhone"   
        value="Начать" />
      
    </div>
    <download-app />
  </div>
</template>

<script>
import AppButton from '@/components/Button';
import DownloadApp from '@/components/DownloadApp';

export default {
  name: 'Home',
  components: {
    AppButton,
    DownloadApp
  },
  methods: {
    myClick() {
      alert('Здесь будем делать авторизацию');
    }
  }
};
</script>
<style>
.home > h1,
.home > p {
  text-align: center;
}

.home h1 {
  font-size: 24px;
  font-weight: bold;
  margin: 20% 0 25px;
}
.home .kntnt_btn {
  margin: auto 0 0;
  padding: 0 10px;
  
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}


</style>
