<template>
    <div class="how component">
        
        <img :src="stepData[numberStep].src" alt="" srcset="">
        <h1 class="mt_auto" v-html="stepData[numberStep].heading" >
        </h1>
        <p v-html="stepData[numberStep].body"></p>
        
        <p class="indexs_step mt_auto" ref="indexs_step">
            <span
                v-for="i in lengtStep" 
                :key="i"
                class="index" 
                :class="{active : (numberStep + 1 == i) ? true : false}" 
                :data-number_step="i-1"
                 ></span>
        </p>        
        
        
        <app-button 
            class="w100 activ_color" 
            toName="map" 
            value="Далее" 
            :actionFun="nextStep"
        />

        <download-app />
    </div>
</template>

<script>
import DownloadApp from '@/components/DownloadApp';
import AppButton from '@/components/Button';

export default {
    name: 'How',
    components: {
        DownloadApp,
        AppButton,
    },
    props: [
        'srcImgs'
    ],
    data() {
        return {
            stepData: [
                {
                    src: '',
                    heading: 'Как начать <br> движение?',
                    body: 'Оттолкнитесь ногой, чтобы начать движение, затем плавно нажмите на кнопку газа для ускорения <b>(1)</b> . Для замедления используйте ручной тормоз слева <b>(2)</b> .',
                },
                {
                    src: '',
                    heading: 'Где можно ездить <br> по городу?',
                    body: 'Старайтесь передвигаться по велосипедным дорожкам. Не выезжайте на автомобильные дороги и бездорожье. Соблюдайте правила ПДД.',
                },
                {
                    src: '',
                    heading: 'Безопасность <br> прежде всего ☝️',
                    body: 'Не разгоняйтесь, если не уверены. Пешеходные переходы пересекайте только пешком. По-возможности надевайте велосипедный шлем.',
                },
                {
                    src: '',
                    heading: 'Как завершить <br> аренду?',
                    body: 'Всегда пристегивайте самокат к велопарковке. Всегда ставьте самокат на подножку.',
                },
            ],
            currentStep: 0 
        }
    },
    methods: {
        nextStep() {
            let nextIndex = + this.$refs.indexs_step.querySelector('.active').dataset.number_step + 1
            if (nextIndex < this.lengtStep) {
                this.currentStep = nextIndex
            } else {
                this.$router.push({name: 'regulations'})
            }
            
        }
    },
    computed: {
        lengtStep() {
            return this.stepData.length;
        },
        numberStep() {
            return this.currentStep;
        }
    },
    created() {
        this.srcImgs.forEach((src, i) => {
            this.stepData[i].src = src;
        });
        console.log(this.srcImgs)
        console.log(this.stepData)
    },
};
</script>

<style>
    .component.how {
        align-items: center;
        text-align: center;
    }
    .how > img {
        width: calc(100% - 73px * 2);
    }
    .how h1 {
        font-size: 24px;
        font-weight: bold;
        line-height: 28px;
        margin-bottom: 18px;
    }
    .how > p {
        margin-left:30px;
        margin-right: 30px;
        
    }
    .indexs_step{
        display: flex;
        justify-content: center;
    }
    .index {
        width: 8px;
        height: 8px;
        margin-right: 8px;
        border-radius: 50%;
    }
    .indexs_step .index:last-of-type {
        margin-left: 0;
    }
</style>