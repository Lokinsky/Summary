<template>
        <div :id="'item-row-'+this.index">
            <h4>{{this.title}}</h4>
            <h5 class="h5d">Описание</h5>
            <p>
                <span>
                    {{this.description}}
                </span>
            </p>
            <h5 class="h5d">Ссылки</h5>
            <p>
                <template v-for="(item,index) in this.refs">  

                    <span :key="index">•<a :href="item.ref" target="_blank">{{" "+item.site}}</a></span>
                </template>
            </p>
        </div>
</template>

<script>

import Vue from 'vue'

export default {
    props:['index','title','description','refs'],
    methods:{}
}
</script>

<style>

</style>