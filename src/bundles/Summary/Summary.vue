<template>
    <div class="summary-component">
        
        <div id="container" class="block-container">
            <router-link to="/"><h5>Назад</h5></router-link>
            <div class="row-1" id="row-block-1">
                <div id="item-row-1" class="personal nunito">
                    <h3>Персональные данные</h3>
                    <div>
                        <p>
                            <span>Никифоров Владимир Георгиевич,</span>
                            <span>21 год</span>
                        </p>
                    </div>
                    <div class="conatcts">
                        <h5><b>Контакты</b></h5>
                        <span><a href="tel:+7-921-894-82-79">8-921-894-82-79</a></span>
                        <span><a href="mailto:wf.pbvova2030@icloud.com">wf.pbvova2030@icloud.com</a></span>
                    </div>
                </div>
                <div id="item-row-2" class="work-history">
                    <h3>История работы</h3>
                    <div class="nunito">
                        <p>
                            <span>Март 2020 — июль 2020</span>
                            <span>5 месяцев</span>
                            <span>Магазин Hatershop</span>
                            <span>Web-программист</span>
                            <span>Обязанности:</span>
                            <span>Поддержка уже существующего программного обеспечения и разработка необходимых программных модулей в контексте деятельности компании. Общение с менеджерами для получения обратной связи.</span>
                            <span>Санкт-Петербург</span>
                        </p>
                        <p>
                            <span>Апрель 2019 — май 2019</span>
                            <span>2 месяца</span>
                            <span>НПК "МСА"</span>
                            <span>Практикант-программист</span>
                            <span>Санкт-Петербург</span>
                        </p>
                    </div>
                </div>
                <div id="item-row-3">
                    <div class="profile">
                        <img class="round" src="/img/primg.png" alt="">
                    </div> 
                    <h4>Веб-Программист</h4>
                    <h4>65 000 руб.</h4>
                </div>
            </div>
            
            <div class="row-2" id="row-block-2">
                <div id="item-row-1" class="about">
                    <h3>О себе</h3>
                    <p class="nunito">
                        <span>Привет! Когда-то я знал только два языка: русский и английский, но спустя некоторое время я освоил язык программирования. 
                    И на данный момент я знаю такие ЯП как: JavaScript, C#, PHP, node.js, Python, Java, а также некоторые фреймворки (vue.js, express.js, symfony 3+). </span>
                        <span>Мой опыт работы в команде равен больше 5-и месяцев. В разработке мне импонирует как Frontend, так и Backend. Я разбираюсь в ООП и активно использую в своих проектах, а также в других коммерческих. И из этого следует, что у меня был опыт в коммерческой разработке программных продуктов.</span>
                        <span>Как социальная единица, я не реактивный, легко встраиваюсь в коллектив, люблю поболтать. 
                    Но как личность я люблю смотреть кинематографии самых разных стран, слушать музыку, играть в шахматы, а также читать книги. Но самое любимое мое хобби — это музыка.</span>
                        <span>Музыкой я начал заниматься ещё в детстве, но с тех пор был большой перерыв и теперь снова встал на этот путь. Также я занимаюсь программированием: тут я разрабатываю свои pet-проекты и улучшаю навыки.</span>
                        <span>Я считаю что созидать — это одно из важных условий жизни. 
                        Не менее важным является и саморазвитие, чем я тоже не пренебрегаю. Поэтому я не забываю заниматься спортом (ведь я в прошлом легкоатлет), читать и обучаться новым навыкам.</span>
                        <span>В портфолио приложены проекты, которые находятся в разработке или на завершающих этапах.</span>
                    </p>
                </div>
                <div id="item-row-2" >
                    <div class="nunito">
                        <h3>Стек</h3>
                        <p>
                            <span>+ JavaScript</span>
                            <span>+ Vue.js</span>
                            <span>+ C#</span>
                            <span>+ jQuery.js</span>
                            <span>+ HTML</span>
                            <span>+ CSS</span>
                            <span>+ PHP</span>
                            <span>+ Node.js</span>
                        </p>
                    <div class="com">
                        <h3>Образование</h3>
                        <p>
                            <span>СПБГАСУ (2020-2025)</span>
                            <span>Менеджмент</span>
                        </p>

                        <p>
                            <span>СПБКТ им. Бонч-Бруевича (2016-2019)</span>
                            <span>ПКС - Программирование в компьютерных системах, Программное обеспечение вычислительной техники и автоматизированных систем</span>
                        </p>
                    </div>
                    </div>
                    
                </div>
            </div>
            <div class="row-3" id="row-block-3">
                <div id="item-row-1" class="head-line">
                    
                </div>
                <div id="item-row-2">
                    <h3>Портфолио</h3>
                </div>
                <div id="item-row-3" class="head-line">
                </div>
            </div>
            <div class="row-4 com" id="row-block-4">
                <div class="sort-blocks-button">
                    <p class="view-block" v-on:click="view_block('row-block-4')">
                        <a>Режим отображения</a>
                        <span class="hover" v-on:click="view_number = 1">1</span>
                        <span class="hover" v-on:click="view_number = 2">2</span>
                        <span class="hover" v-on:click="view_number = 3">3</span>
                        <span class="hover" v-on:click="view_number = 4">4</span>
                        <span class="hover" v-on:click="view_order = view_order=='desc'?'asc':'desc'"><strong>{{view_order=='desc'?'&#8595;':'&#8593;'}}</strong></span>
                        
                        
                    </p>
                    
                </div>
                <transition-group name="fade">
                <template v-if="this.get_projects.length>0">
                    <template  v-for="(project,index) in this.get_projects">
                        <ProjectItem class="nunito" :key="index" :title="project.title" :description="project.description" :refs="project.refs" :index="index+1" />
                    </template>
                </template>
                 </transition-group>
                <template v-if="this.get_projects.length==0">
                    <div class="loading">
                        <div class="circle"></div>
                        <div class="circle"></div>
                        <div class="circle"></div>
                    </div>
                </template>
            </div>
        </div>

    </div>

</template>

<script>

import Vue from 'vue';
import Vuex from 'vuex';
import store from './store/store.js';
Vue.use(Vuex)

export default {
    store,
    data(){
        return{
            view_number:0,
            view_order:"desc",
            
        }
    },
    props:[],
    created(){
        this._init_firebase()
        console.log(this.get_projects)
        
    },
    computed:Vuex.mapGetters(['get_projects']),
    methods:{
        ...Vuex.mapActions(['_init_firebase','fetch_projects']),
        async view_block(element){
            await this.$core().put('autolayout',{'id':element,'flex-group':this.view_number, 'order':this.view_order}, (layout,data)=>{
                for (let i = 0; i < layout['block'].length; i++) {
                    const element = layout['block'][i];
                    if(element.id==data.id){
                        if(data['flex-group']>0)
                            layout['block'][i]["flex-group"] = data['flex-group']
                        layout['block'][i]["order"] = data['order']
                        
                        break;
                        
                    }
                }
                return layout;
            })
        }

    },
    mounted(){
        this.fetch_projects();
    },
    updated(){
    }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap');

@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@200&display=swap');


/**loading */
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active до версии 2.1.8 */ {
  opacity: 0;
}
loading{
    display: flex;
    flex-direction: row;
    padding:20px;
    justify-content: center;
}
/*.circle{
    border: 4px black solid;
    border-radius: 100px;
    margin: 10px;
    width:16px;
    height: 16px;
    opacity: 0;
}*/
.loading div {
    border-radius: 50%;
    position: relative;

    width: 100%;
}
.loading div:nth-of-type(odd) {
    background: black;
}
.loading div:nth-of-type(even) {
    background: white;
    border: 2px solid black;
}
.loading div:nth-of-type(3) {
    height: 10px;
    width: 10px;
    margin-top: -5px;
    margin-left: -5px;
    -webkit-animation: slide 3s ease-in-out infinite;
    animation: slide 3s ease-in-out infinite;
}
.loading div:nth-of-type(2) {
    height: 20px;
    width: 20px;
    margin-top: -12px;
    margin-left: -12px;
    -webkit-animation: slide 3s -2.7s ease-in-out infinite;
    animation: slide 3s -2.7s ease-in-out infinite;
}
.loading div:nth-of-type(1) {
    height: 40px;
    width: 40px;
    margin-top: -20px;
    margin-left: -20px;
    -webkit-animation: slide 3s -2.4s ease-in-out infinite;
    animation: slide 3s -2.4s ease-in-out infinite;
}
@keyframes slide {
    0% {
        left: 75%
    }
    50% {
        left: 25%;
    }
    100% {
        left: 75%;
    }
}
@-webkit-keyframes slide {
    0% {
        left: 75%
    }
    50% {
        left: 25%;
    }
    100% {
        left: 75%;
    }
}


/**end loading */





.group-sort{
    margin: 0px 0px 20px 0px;
}
.nunito{
    font-family: 'Nunito', sans-serif;
    font-size: 12pt;
}
h2{
    font-family: 'Press Start 2P', cursive;
    font-size: 24pt;
}
.round {
    display: inline;
    align-items: center;
    border-radius: 100px; /* Радиус скругления */
    
    border: 3px solid whitesmoke; /* Параметры рамки */
    box-shadow: 0 0 7px #666; /* Параметры тени */
}
img.round{
    width: 5em;
    height: 5em;

}
  
h3{
    font-family: 'Press Start 2P', cursive;
    font-size: 18pt;
    margin: 0px 0px 24px 0px;
}
h4{
    font-family: 'Press Start 2P', cursive;
    font-size: 16pt;
    
}
h5{
    font-family: 'Press Start 2P', cursive;
    font-size: 14pt;
}
.h5d{
    font-family: 'Press Start 2P', cursive;
    font-size: 12pt;
}
.tab{
    text-indent:40px 
}
.summary-component{
    padding: 0px 0px 0px 2vw;

}
/*.personal{
    margin: 0px 30px 0px 0px;
}

.work-history{
    margin: 0px 30px 0px 0px;
}
.about{
    margin: 0px 24px 0px 0px;
}*/

.row-3{
    justify-content: center;
}
.row-3>h3{
    margin:0px;
    padding: 0px 0px;
}
.group-sort-row-block-4{
    gap: 2vw;
}
.head-line{
    border-bottom: 4px solid #5B5B5B;
    margin: 1vh 1vw;
    width: 10vw;
}
.conatcts{
    display: flex;
    flex-direction: column;
}
.work-history>.description{
    display: flex;
    flex-direction: column;
}
p{
    display: flex;
    flex-direction: column;

    /**text-shadow: 0 2px 4px rgba(0,0,0,0.50);*/
}
.back-btn{
    padding: 59px 0px 0px 0px;
    min-width: 171px;
    min-height: 21px;
}
.profile{
    min-width: 263px;
    min-height: 80px;
    vertical-align: middle;
    margin: 0px 0px 30px 0px;
    display: flex;
    flex-direction: row;
}
.sort-blocks-button{
    padding: 0px 15px;
    margin: 0px;
    font-family: 'Nunito', sans-serif;
    font-size: 12pt;
}
.sort-blocks-button>p{
    display: flex;
    flex-direction: row;
    
}
.sort-blocks-button>p>span{
    margin: 0px 1vw;
    border:0px black solid; 
    box-sizing: content-box;
    width: 20px;
    height: 20px;
    justify-content: center;
    display: flex;
    border-radius: 6px;
    cursor: pointer;
    background-color: #FF7F00;
}
.hover:hover{
    box-shadow: 0 2px 4px rgba(148,148,148,0.50);
}
a{
    cursor: pointer;
    text-decoration: none;
    color: black;
}
</style>