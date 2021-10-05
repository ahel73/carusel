<template>
  <div class="enter_code component">
        <img class="logo" src="@/assets/images/full-logo/86.png" alt="" />

        <div class="block_enter">
             <p>
                Введите код, отправленный на
            </p>
            <p>
                {{phone}}
            </p>

            <div class="fields_code">
                <input 
                    v-for="n in 6"
                    type="tel"
                   :key="'input'+n" 
                    @keyup="enterNumber"
                >
            </div>

            <p v-if="waitCode">
                через {{timeOut}} секунд вы можете повторно запросить код.
            </p>
            <p v-else @click="startTimeCode">
                Отправить код повторно
            </p>
        </div>
        
        <app-button 
            class="w100 mt_auto"
            :class="{
                activ_color_disabled: !trueCode,
                activ_color: trueCode
            }"
            :notJump="!trueCode"
            toName="payment" 
            value="Далее" 
            :parendFun="sendCode"
        />

        <p class="soglasie">
            Нажимая «Далее», я даю свое согласие на обработку моих персональных данных на условиях <a class="activ_color_font" href="">Политики конфиденциальности</a>, а так же <a class="activ_color_font" href="">Лицензионный договор</a>  и <a class="activ_color_font" href="">Правила сервиса</a> 
        </p>
        <download-app />
    </div>
</template>

<script>
import DownloadApp from '@/components/DownloadApp';
import AppButton from '@/components/Button';
// const axios = require('axios');
let moment = require('moment-timezone');
let md5 = require('md5');

export default {
    name: 'EnterCode',
    components: {
        DownloadApp,
        AppButton
    },
    props: {
        phone: {
            type: String,
            default: ''
        } ,
        standardTimeOut: {
            type: Number,
            default: 60
        }
    },
    data() {
        return {
            code: '',
            timeOut: this.standardTimeOut,
            setIntervalId: null,
            lengthCode: false

        }
    },
    methods: {
        enterNumber(oe) {
            if(!oe.target.value.length) {
                this.lengthCode = false;
            }
            // Если вводим символ не число
            if(isNaN(oe.key)) {    
                 
                // Если при этом в инпуте символов больше одного, то оставляем первый символ если число а если не число то очищаем импут
                if (oe.target.value.length > 1) {
                    oe.target.value = !isNaN(oe.target.value[0]) ? oe.target.value[0] : '';
                    
                } else {
                    oe.target.value = '';
                }
                return;
            }
            
            if (oe.target.value.length > 1) {
                oe.target.value = !isNaN(oe.target.value[0]) ? oe.target.value[0] : '';
                return;
            }

            var input = oe.target;
            // Если есть следующий инпут и он непустой то переводим фокус
            if(input.nextElementSibling && !input.nextElementSibling.value) {
                input.nextElementSibling.focus();
                return;
            } 

            input.blur();
        
            // Начинаем собирать все цифры из инпутов
            var inputs = input.closest('.fields_code').querySelectorAll('input');
            
            var hole = false; //Если будет пустой инпут переводим в истину 
            let code = '';
            inputs.forEach(el => {
                if(!el.value) {
                    hole = true;
                    return;
                } else {
                    code += el.value
                }
            });
            if (hole) {
                this.code = ''
            } else {
                this.code = code;
                this.lengthCode = true;
            }

            
        },
        startTimeCode() {
            this.setIntervalId = setInterval(() => {
            this.timeOut--
            if(this.timeOut == 0) {
                clearInterval(this.setIntervalId);
                this.setIntervalId = null;
                this.timeOut = this.standardTimeOut
            }
            console.log(this.setIntervalId)
        }, 1000);
        },
        sendCode() {
             let data = {
                code:  this.code,
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
            
            // console.log(data)
            // if (data) return true;

            let param = '' +
                'version='+ data.version +
                '&code='+ data.code +
                '&deviceToken=' + data.deviceToken + 
                '&os=' + data.os + 
                '&p1=' + this.calcClientRequestSrc(data.deviceToken, data.phone)
            
            var ajax = new XMLHttpRequest();
            ajax.open('post', 'https://test.carusel.club/api/client/auth?' + param, false)
            ajax.withCredentials = true;
            
            ajax.send(null);
            console.log(ajax);
            if (ajax.statusText == 'Bad Request' ) {
                alert("Проверте правильность введённого кода либо сообщите об ошибке разработчику");
                return true;
            }
            console.log(ajax.responseText);
            
            var ajax1 = new XMLHttpRequest();
            ajax1.open('get', 'https://test.carusel.club/api/client/status', false)
            ajax1.withCredentials = true;
            
            ajax1.send(null);
            console.log(ajax1);

        },
        calcClientRequestSrc(deviceToken, phone) {
            let timeStr = moment().format().split('T')[0]; // Получаем день в нужном формате
            let text = timeStr + deviceToken + phone // Конкатенируем
            console.log(text)
            return md5(text) //Хешируем
        }
    },
    computed: {
        trueCode(){
            return this.lengthCode && !!this.code;
        },
        waitCode() {
            return this.timeOut != this.standardTimeOut
        }

    },

    mounted() {
        this.startTimeCode()        
    },
    beforeDestroy() {
        
        if (this.setIntervalId) {
            clearInterval(this.setIntervalId);
        }
    }
}
</script>
<style>
.enter_code .block_enter{
    border-bottom: none;
}
.enter_code .block_enter p {
    margin-bottom: 0;
}
.fields_code {
    display: flex;
    justify-content: center;
    margin: 70px 0;
}
.fields_code input{
    width: 20px;
    padding-bottom: 5px;
    margin-left: 5px;
    border-bottom: 1px solid rgb(196, 196, 196);
    text-align: center;
}
</style>