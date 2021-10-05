<template>
    <a class="psevdo_btn"  href="" @click.prevent="jump($event, parendFun, actionFun, inFunNotJump)">{{valueThis}}</a>
</template>

<script>
export default {
    name: 'AppButton',
    props: {
        value: String, // Имя кнопки
        toName: String, // Значение свойства name из роута компонента на который должен быть осуществлён переход 
        parendFun: Function, // Функция которая должна быть выполнена до перехода но сам переход не отменят, если только эта функция не возвращае5т истину
        objProps: Object, // Объект пропсов которые должны быть переданы в компанент на который осуществляется переход
        actionFun: Function, // Функция которая выполняется при клике на кнопку но при этом не какого перехада на другую страницу делать не надо
        notJump: { // Если истина значит переход не выполняется - запрещается
            type: Boolean,
            default: false
        },
        inFunNotJump: Function // Функция выполняемая если переход запрещён
    },
    data() {
        return {
            valueThis: this.value,
            toNameThis: this.toName,
            objPropsThis: this.objProps,
        }
    },
    methods: {
        
        jump(oe, parendFun = null, actionFun = null, inFunNotJump = null) {
            if (this.notJump) {
                if (inFunNotJump) {
                    inFunNotJump()
                }
                return;
            }
            if (actionFun) {
                actionFun()
                return;
            }
            if (parendFun) {
                if (parendFun()) return;
            }
                                    
            this.$router.push({name: this.toNameThis, params: this.objProps})
        }
    },
};
</script>
<style>
    .psevdo_btn {
        display: inline-flex;
        justify-content: center;
        align-items: center;
        padding: 18px 0;
        border-radius: 30px;
        border: 2px solid rgb(102, 184, 81);
        color: rgb(102, 184, 81);
        font-size: 17px;
        width: 48%;
    }
    .fiolet{
        background: #7435DB;
        border-color: #7435DB;
        color: white;
    }
    .psevdo_btn.activ_color {
        background: rgb(102, 184, 81);
        color: #ffffff;
    }
    .psevdo_btn.activ_color_disabled {
        background: rgba(102, 184, 81, .5);
        border: none;
        color: #ffffff;
    }
    .psevdo_btn::before {
        content: '';
        font-family: FontAwesome;
        font-size: 25px;
        font-weight: bold;
        text-rendering: auto;
    }
    .psevdo_btn.fa::before {
        margin-right: 12px;
    }
    .psevdo_btn.map::before {
        content: '\f278'
    }
    .psevdo_btn.question::before {
        content: '\f29c'
    }
    .psevdo_btn.flags::before {
        content: '\f11d'
    }

</style>
