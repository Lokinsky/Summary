var firebase = require("firebase/app");
require("firebase/database");

export default {
    state:{
        projects:[

        ],
        firebaseConfig:{
            apiKey: "AIzaSyDtaTGqZCaL7LPKhvX9XC80V_YrVhE1DiQ",
            authDomain: "summary-8ec3c.firebaseapp.com",
            databaseURL: "https://summary-8ec3c.firebaseio.com",
            projectId: "summary-8ec3c",
            storageBucket: "summary-8ec3c.appspot.com",
            messagingSenderId: "463048131650",
            appId: "1:463048131650:web:fa68e1f6901a90e30219db"
        },
     },
    mutations: {  
        __init(state){
            firebase.initializeApp(state.firebaseConfig);
        },
        updating(state,obj){
            state[obj.target] = obj.data
        }
    },
    actions: {
        _init_firebase(ctx){
            ctx.commit('__init')
        },
        fetch_projects(ctx){
            firebase.database().ref('/projects').on('value',(snap)=>{
                ctx.commit('updating',{"target":"projects","data":snap.val()})
            })
            
        }
    },
    getters:{
        get_projects(state){
            return state.projects
        }
    }
  }