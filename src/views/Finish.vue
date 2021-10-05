<template>
    <div class="finish  component">
        <h1>
            🅿️ Как правильно <br> парковать самокат?
        </h1>
        <div class="rules mt_auto">
            <p>
                <span>Всегда пристегивайте самокат к велопарковке; </span>
            </p>
            <p>
                <span>Всегда ставьте самокат на подножку.</span>
            </p>
            <h2>
                ❌ Запрещается:
            </h2>
            <p>
                <span>Перекрывать пешеходные проходы и проезды для автомобилей; </span>
            </p>
            <p>
                <span>Пристегивать самокат к автобусным остановкам, заборам прочим предметам; </span>
            </p>
            <p>
                <span>Завершать аренду внутри помещений.</span>
            </p>
        </div>
        

        <app-button 
            class="w100 activ_color mt_auto" 
            toName="parking" 
            value="Далее" 
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
    .finish h1 {
        font-size: 24px;
        font-weight: bold;
        line-height: 28px;
        margin: 0 17px 18px;
    }
    .rules{
        margin: 0 17px;
    }
    .rules h2 {
        font-weight: bold;
        margin: 32px 0 18px;
    }
</style>