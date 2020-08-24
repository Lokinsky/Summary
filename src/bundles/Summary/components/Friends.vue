<template>
    <div class="friends-view">
        <h2>Friends</h2>
        {{this.$route.params.friends=='friends'?"Список друзей":""}}
        <div v-if="this.$route.params.friends=='friends'" style="display:flex; align-items: left;flex-direction:column; overflow-y:scroll; height:200px; width:900px; border:1px solid black;">
            <div v-for="(item,index) in this.get_current_id_friends(this.$route.params.id)" style="margin:10px;"> 
                <div style="justify-content:center;" >
                    <img :src="item['photo_50']" alt="" srcset="">
                    
                    <span>{{index+". "+item.first_name+" "+item.last_name+(item['online']?" Онлайн":' Не в сети')}}</span>
                    <span><a style="border:1px solid black; cursor:pointer;" id="profile-friends-link" v-on:click="route(item.id)" >Открыть профиль...</a></span>
                    <span><a style="float=right;" :href="'http://vk.com/id'+item.id" target="_blank" rel="noopener noreferrer">ВК...</a></span>
                </div>
                <div style="justify-content:center;">
                    
                </div>
                

            </div>
        </div><br>
        <code v-if="!this.$route.params.friends">{{this.get_profile(this.$route.params.id)}}</code>
    </div>

</template>

<script>

import Vue from 'vue'
import Vuex from "vuex"

export default {
    props:[],
    created(){

        
    },
    computed:Vuex.mapGetters(['get_access_token','get_current_id_friends']),
    methods:{
        ...Vuex.mapActions(['_execute_vk_api_method']),
        route(id){
            const usr_d = this.get_access_token;
            this._execute_vk_api_method({name:'fetch_profile',user_id:id,user_token:usr_d.value});
            this._execute_vk_api_method({name:'fetch_user_friends_by_id',user_id:id,user_token:usr_d.value})
            this.$router.push({path:`/profile/id/${id}`}).catch(()=>{})
            //console.log('profile')
            //console.log(this.get_profile(this.$route.params.id))
        }
    },
    mounted(){
            const usr_d = this.get_access_token;
            this._execute_vk_api_method({name:'fetch_user_friends_by_id',user_id:this.$route.params.id,user_token:usr_d.value})
    },
    updated(){
        
        console.log("Update the friends-component")
    }
}
</script>

<style>
.friends-view{
    display: flex;
    flex-direction: column;
}
</style>