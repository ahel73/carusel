<template>
    <div class="tarif component">
        
        <h1 class="bigH1">
            Тариф <span class="name_tarif">«1 час»</span> 
            
        </h1>
        <div class="kntnr_info_tarif">
            <div>
                <aside>
                    <h2>Стоимость</h2>
                    <p class="rub">375</p>
                </aside>
            </div>
            <div>
                <aside>
                    <h2>Включено</h2>
                    <p class="hour">1</p>
                </aside>
            </div>
            <div>
                <aside>
                    <h2>Перерасход</h2>
                    <p><span class="rub">5</span> за минуту</p>
                </aside>
            </div>
        </div>
        <div class="how_work">
            <h2>
                Как это работает
            </h2>
            <p>
                По истечению 1 часа: 5₽/мин. в поездке, 2₽/мин. в ожидании 
            </p>
             <p>
                ⚠️ По завершению аренды неизрасходованные по тарифу минуты сгорят 
            </p>
            <p>
                ⚠️ Обратите внимание, что кататься на самокате можно только в рамках доступного для самоката запаса хода.
            </p>
        </div>
        
                <a @click.prevent="$router.back()" class="psevdo_btn w100 activ_color" href=""
        >Закрыть</a>
        
        

        <download-app />
    </div>
</template>

<script>

import DownloadApp from '@/components/DownloadApp';

export default {
    name: 'Payment',
    components: {
        DownloadApp
    },
    methods: {
        back() {
            console.log(this.$route)            
        }
    },
};
</script>

<style>
.how_work{
    margin-top: 24px;
    min-height: 20vh;
    max-height: 35vh;
    overflow: auto;
}
.how_work p {
    margin-bottom: 10px;
}
</style>