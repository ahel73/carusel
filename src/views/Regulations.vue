<template>
    <div class="regulations component">
        <h1>
            Правила сервиса
        </h1>
        <div class="rules mt_auto">
            <p>
                <img src="@/assets/images/water.png" alt="">
                <span>Нельзя выезжать на бездорожье и кататься по лужам;</span>
            </p>
            <p>
                <img src="@/assets/images/car.png" alt="">
                <span>Точно не стоит передвигаться по автомобильным дорогам;</span>
            </p>
            <p>
                <img src="@/assets/images/alko.png" alt="">
                <span>Ни в коем случае не берите самокат в состоянии алкогольного опьянения;</span>
            </p>
            <p>
                <img src="@/assets/images/balance.png" alt="">
                <span>Даже на секундочку не надо брать на борт пассажиров, да, и детей тоже;</span>
            </p>
            <p>
                <img src="@/assets/images/house.png" alt="">
                <span>Не заносите самокат в помещение. Если нужно сделать перерыв, просто пристегните самокат к велопарковке у входа в здание;</span>
            </p>
            <p>
                <img src="@/assets/images/mask.png" alt="">
                <span>Используйте средства индивидуальной защиты: маску, перчатки.</span>
            </p>
        </div>
        

        <app-button 
            class="w100 activ_color mt_auto" 
            toName="paid" 
            value="Погнали!" 
        />

        <download-app />
    </div>
</template>

<script>
import DownloadApp from '@/components/DownloadApp';
import AppButton from '@/components/Button';

export default {
    name: 'Regulations',
    components: {
        DownloadApp,
        AppButton,
    },
};
</script>

<style>
    .regulations.component {
        align-items: center;
    }
    .regulations h1{
        font-size: 24px;
        font-weight: bold;
        line-height: 28px;
        margin-bottom: 18px;
    }
    .rules p{
        display: flex;
        align-items: start;
        margin-bottom: 8px;
    }
    .rules img{
        margin-right: 13px;
    }
</style>