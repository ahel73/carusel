<template>
    <div class="payment component">
        <div class="kntnr_scooter_left">
            <img src="@/assets/images/scooter_left.png" alt="">
            <div class="individual_data">
                <p class="one">
                    <span class="id_scooter">1341</span>
                    <span>Самокат <b>ONE</b></span>
                </p>
                <p class="two">
                    <span class="zaryd"><b>55%</b> </span>
                    <span class="distance ">19</span>
                </p>
            </div>
        </div>
        <h1 class="bigH1">
            Тариф <span class="name_tarif">«1 час»</span>
            <router-link class="details" :to="{name: 'tarif'}">Подробнее...</router-link>
        </h1>
        <div class="kntnr_info_tarif">
            <div>
                <article>
                    <h2>Стоимость</h2>
                    <p class="rub sum">375</p>
                </article>
                <article>
                    <h2>Включено</h2>
                    <p class="hour">1</p>
                </article>
            </div>
            <div>
                <article>
                    <h2>Перерасход</h2>
                    <p><span class="rub">5</span> за минуту</p>
                </article>
            </div>
        </div>
        
        <app-button 
            class="w100 mt_auto activ_color platej" 
            toName="paymentTerminal" 
            value="Оплатить и начать поездку" 
            :notJump="true"
        />

        <download-app />
    </div>
</template>

<script type="module">
import DownloadApp from '@/components/DownloadApp';
import AppButton from '@/components/Button';

export default {
    name: 'Payment',
    components: {
        DownloadApp,
        AppButton
    },
};
</script>

<style>
    .component.payment {
        justify-content: flex-start;
        margin-left: 17px;
        margin-right: 17px;
    }
    .kntnr_scooter_left {
        margin-top: 16px;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-bottom: 45px;
    }
    .kntnr_scooter_left img{
        width: 120px;
        margin-right: 16px;
    }
    .individual_data p {
        display: flex;
        align-items: center;
        justify-content: flex-start;
    }
    .individual_data .one {
        font-size: 12px;
    }
    .individual_data .two {
        font-size: 14px;
        margin-top: 10px;
    }
    .id_scooter{
        display: inline-block;
        padding: 2px 9px;
        background: #66B851;
        border-radius: 6px;
        font-size: 12px;
        margin-right: 8px;
        color: rgba(255, 255, 255, 1);
    }
    .zaryd{
        display: inline-flex;
        align-items: center;
        margin-right: 6px;
    }
    .zaryd::before{
        content: url("../assets/images/charge_3.png");
        display: inline-block;
        height: 16px;
        margin-right: 6px;
    }
    .distance{
        color: rgb(184, 184, 184);
    }
    .distance::after{
        content: 'км';
        margin-left: 3px;
    }
    .payment h1 {
        margin-top: auto;
    }
    .details {
        font-size: 12px;
        font-weight: bold;
        color: rgba(102, 184, 81, 1);
        display: inline-block;
    }
    
    h1 .details {
        margin-left: 12px;
    }
    .kntnr_info_tarif{
        margin-top: 27px;
    }
    .kntnr_info_tarif > div {
        display: flex;
    }
    .kntnr_info_tarif article {
        margin-right: 20px;
        margin-bottom: 16px;
    }
    .kntnr_info_tarif h2, .how_work h2 {
        font-size: 14px;
        font-weight: bold;
        margin-bottom: 10px;
    }
    .kntnr_info_tarif article p {
        font-size: 24px;
    }
    .rub::after{
        content: '₽';
        display: inline-block;
        margin-left: 5px;
    }
    .rub::after{
        content: '₽';
        display: inline-block;
        margin-left: 5px;
    }
    .hour::after {
        content: 'ч';
        display: inline-block;
        margin-left: 5px;
    }
</style>