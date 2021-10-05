<!-- Страница ввода номера -->
<template>
    <div class="enter_phone component">
        <img class="logo" src="@/assets/images/full-logo/86.png" alt="" />

        <div class="block_enter">
            <p>
                Введите номер вашего телефона
            </p>
            <div class="kntnr_psevdoinput">
                <span class="zaglushka"></span>
                <phone-mask-input
                    v-model="phone"
                    placeholder="+7 (123) 123-45-67"               
                    showFlag
                    wrapperClass="psevdoinput"
                    inputClass="js_inputPhone"
                    flagClass="flag"
                    @onValidate="onValidate"
                />
                <img 
                    class="cursor"
                    :class="{clear: isNotClear}"
                    src="@/assets/images/close.png" alt=""
                    @click="clearValue"
                >
            </div>
            
        </div>
        <!-- <a @click.prevent="test" href="">test</a> -->
        
        <app-button 
            class="w100 mt_auto" 
            :class="{
                activ_color_disabled: !truePhone,
                activ_color: truePhone
            }"
            toName="enterCode" 
            value="Далее" 
            :parendFun="sendPhone"
            :objProps="{phone: phone}"
            :notJump="!isFullNumber"
        />

        <p class="soglasie">
            Нажимая «Далее», я даю свое согласие на обработку моих персональных данных на условиях <a class="activ_color_font" href="">Политики конфиденциальности</a>, а так же <a class="activ_color_font" href="">Лицензионный договор</a>  и <a class="activ_color_font" href="">Правила сервиса</a> 
        </p>
        <download-app />
    </div>
</template>

<script>
import PhoneMaskInput from  "vue-phone-mask-input";
let moment = require('moment-timezone');
let md5 = require('md5');

import DownloadApp from '@/components/DownloadApp';
import AppButton from '@/components/Button';

// const axios = require('axios');

export default {
    name: 'EnterPhone',
    components: {
        PhoneMaskInput,
        DownloadApp,
        AppButton,
    },
    props: {
        parendPhone: String,
    },
    data() {
        return {
            phone: this.parendPhone,
            isFullNumber: false,
        }
    },
    methods: {
        // test($event) {
        //     console.log($event)
        //     var ajax = new XMLHttpRequest();
        //     ajax.open('post', 'http://carusel.lh/?name=alex', false)
        //     ajax.withCredentials = true;
        //     console.log(ajax);
        //     ajax.send(null);
        //     console.log(ajax);
        // },
        clearValue() {
            this.phone = '';
            this.isFullNumber = false;
            (document.querySelector('.js_inputPhone')).value = this.phone;
        },
        onValidate(oe){
            this.isFullNumber = oe.isValidByLibPhoneNumberJs;
            this.$emit('onValidate', oe)
        },
        sendPhone() {
             let data = {
                phone:  this.phone.toString().slice(1),
                lat: '0',
                lng: '0',
                loc: '1',
                version: '4.0.0',
                vcode: '1080',
                os: 'android',
                deviceToken: '112221cmdw1YA4TgOuUVh_dW0rW_:APA91bFg_5afVzVVAWaonAx-n81MqOfILo6_0RXYdRDhIfnA3Y7uXCDwsYH4ZMUsxsD7tOKM3vFZxwMarrH1jB7bur_sKEoEwsf8BT7H9kAUiYt-e8ZIU3CNp1a8gMANMZuXS8QDMkhR',
                modelInfo: 'Xiaomi_M2007J20CG',
            }
            data.p1 =  this.calcClientRequestSrc(data.deviceToken, data.phone)

            let param = '' +
                'version='+ data.version +
                '&phone='+ data.phone +
                '&deviceToken=' + data.deviceToken + 
                '&os=' + data.os + 
                '&p1=' + this.calcClientRequestSrc(data.deviceToken, data.phone)
            
            
            var ajax = new XMLHttpRequest();
            ajax.open('post', 'https://test.carusel.club/api/client/auth?' + param, false)
            ajax.withCredentials = true; // что бы отправлялись и принимались куки, на сервере должен быть соотвествующий заголовок иначе записи кук не будет хоть и будут отправляться ответом
            ajax.send(null);
            
            if (ajax.statusText == 'Bad Request' ) {
                alert("Проверте правильность номера либо сообщите об ошибке разработчику");
                
                this.isFullNumber = false;
                return true;
            }
            console.log(ajax);
        },
        calcClientRequestSrc(deviceToken, phone) {
            let timeStr = moment().format().split('T')[0]; // Получаем день в нужном формате
            let text = timeStr + deviceToken + phone // Конкатенируем
            return md5(text) //Хешируем
        }
    },
    computed: {
        // Если нет хотя бы одной цифры по телефону, то возвращаем истину. Для отображения крестика очистки
        isNotClear() {
            return !this.phone
        },
        // Для разблокировки кнопки далее если номер валидный
        truePhone(){
            return this.isFullNumber;
        }

    },
};
</script>

<style>
    .block_enter{
        margin: auto 15px 0;
        padding-bottom: 6px;
        border-bottom: 1px solid rgba(196, 196, 196, 1);
    }

    .block_enter p{
        color: rgba(0, 0, 0, .6);
        font-size: 14px;
        text-align: center;
        margin-bottom: 28px;
    }

    .kntnr_psevdoinput{
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .block_enter .psevdoinput{
        display: inline-flex;
        flex-direction: row-reverse;
        justify-content: left;
        align-items: center;
        
        height: 25px;
    }
    
    .block_enter input {
        font-size: 21px;
        text-align: left;
        outline: none;
        
    }

    .block_enter span.flag {
        
        margin-right: 15px
    }
    .zaglushka{
        width: 60px;
        height: 25px;
        display: inline-block;
        
    }
    .soglasie{
      margin-top: 25px;
      text-align: center;
      font-size: 12px;
      line-height: 16px;
    }
    .clear{
      opacity: 0;
    }
</style>