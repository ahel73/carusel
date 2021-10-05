<template>
    <div class="paid component">
         <div class="kntnr_scooter_left">
            <div class="individual_data">
                <p class="one">
                    <span class="id_scooter">1341</span>
                    <span>Самокат <b>ONE</b></span>
                </p>
                <p class="greyColor">
                    Тариф - «Минуты»
                </p>
                <p>
                    <router-link class="details" :to="{name: 'tarif'}">Подробнее...</router-link>
                </p>
                <p class="greyColor">
                    Поездка
                </p>
            </div>
            <img src="@/assets/images/scooter_left.png" alt="">
        </div>
        <div class="info_trip">
            <article>
                <img src="@/assets/images/charge_full.png" alt="">
                <b>
                    73% 
                </b>
                <p class="greyColor">
                    36 км
                </p>
            </article>
            <article>
                <img src="@/assets/images/distance.png" alt="">
                <b>
                    2.8 км
                </b>
                <p class="greyColor">
                    10 км/час
                </p>
            </article>
            <article>
                <img src="@/assets/images/time.png" alt="">
                <b>
                    0:45:03
                </b>
                <p class="greyColor">
                    
                </p>
            </article>
            <article>
                <img src="@/assets/images/ruble.png" alt="">
                <b>
                    149₽
                </b>
                <p class="greyColor">
                    
                </p>
            </article>
        </div>

        <app-button class="w100 mt_auto fa map" toName="map" value="Карта" />
        <app-button 
            class="w100 fa question" 
            toName="how" 
            value="Как это работает" 
            :parendFun="imgsSrc"
            :objProps="{srcImgs: srcImgs}"
        />
        <app-button class="w100 fa flags fiolet" toName="finish" value="Завершить аренду" />

        

        <download-app />
        <div style="display:none" ref="kntnrImgs">
            <img src="@/assets/images/how1.png" alt="">
            <img src="@/assets/images/how2.png" alt="">
            <img src="@/assets/images/how3.png" alt="">
            <img src="@/assets/images/how4.png" alt="">
        </div>
    </div>
</template>

<script>
import AppButton from '@/components/Button';
import DownloadApp from '@/components/DownloadApp';

export default {
    name: 'Payment',
    components: {
        DownloadApp,
        AppButton
    },
    data() {
        return {
            srcImgs: [],
        }
    },
    methods: {
        imgsSrc() {
            let imgTage = this.$refs.kntnrImgs.children
            for(let i = 0; i < imgTage.length; i++ ) {
                this.srcImgs[i] = imgTage[i].src
            }
            // console.log(this.srcImgs)
        }
    },
};
</script>

<style>
.paid .kntnr_scooter_left{
    justify-content: space-between;
    padding: 0 17px;
}
.paid .individual_data {
    font-size: 12px;
}
.paid .individual_data .one{
    margin-bottom: 10px;
}
.paid .kntnr_scooter_left > img {
    width: 170px;
}
.how_work{
    margin-top: 24px;
    min-height: 20vh;
    max-height: 35vh;
    overflow: auto;
}
.how_work p {
    margin-bottom: 10px;
}
.info_trip {
    display: flex;
    align-items: start;
    justify-content: space-between;
    padding: 0 10px;
    margin-top: auto;
}
.info_trip article{
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
}
</style>