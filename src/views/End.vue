<template>
    <div class="end component">
        <img src="@/assets/images/end.png" alt="">

        <h1 class="mt_auto">Поездка завершена</h1>
        <div class="block_p mb_auto">
            <p>Спасибо за использования нашего сервиса! Чек за поездку мы пришлем на телефон в виде СМС.</p>
            <p>Скачайте наше приложение, чтобы получить больше возможностей!</p>
            <p>Для повторного бронирования требуется отсканировать QR-код на самокате</p>
        </div>
        <download-app />
    </div>
</template>

<script>
import DownloadApp from '@/components/DownloadApp';

export default {
  name: 'End',
  components: {
        DownloadApp,
    },
};
</script>

<style>
    .end.component {
        align-items: center;
        justify-content: start;
    }
    .end > img {
        width: 132px;
        margin-top: 55px;
    }
    .end h1{
        font-size: 24px;
        font-weight: bold;
        line-height: 28px;
        margin-bottom: 18px;
    }
    .end .block_p p{
        text-align: center;
        color: rgba(0, 0, 0, 0.6);
        margin-bottom: 10px;
    }
</style>