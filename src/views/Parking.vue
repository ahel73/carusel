<template>
    <div class="parking  component">
        <img src="@/assets/images/parking.png" alt="">
        
        <h1 class="mt_auto">
            Пристегните самокат
        </h1>
        <p class="mb_auto">
            Оберните трос замка вокруг велосипедной парковки и защелкните наконечник в замок, светодиод загорится красным.
        </p>
        <app-button 
            class="w100  mt_auto" 
            toName="" 
            value="Освободить трос" 
            :actionFun="freedomCable"
        />
        <app-button 
            class="w100 activ_color" 
            toName="end" 
            value="Самокат пристегнут" 
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
    methods: {
        freedomCable() {
            alert('трос освободись')
        }
    },
};
</script>

<style>
    .parking.component {
        align-items: center;
        margin-top: -20px;
    }
    .parking > img {
        max-width: 237px;
        max-height: 35vh;
    }
    .parking h1{
        font-size: 24px;
        font-weight: bold;
        line-height: 28px;
        margin-bottom: 18px;
    }
    .parking h1 + p{
        text-align: center;
        color: rgba(0, 0, 0, 0.6);
    }
    .rules img{
        margin-right: 13px;
    }
</style>