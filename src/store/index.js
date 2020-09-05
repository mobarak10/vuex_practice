import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
      totalClicked: 5,
      teamMates: [],
      toDos: [],
      users: [],
      toDoFetchClicked: 0,
  },
  getters:{
     task: (state) => (payload) => {
        return state.toDos.filter(todo => todo.completed === payload)
     }
  },
  mutations: {
      incrementClick(state){
          state.totalClicked++
      },

      addNewTeammate(state, payload){
          state.teamMates.push(payload)
      },

      fetchToDos(state, payload){
          state.toDos = payload
      },

      fetchUsers(state, payload){
          state.users = payload
      },

      incrementFetchClick(state){
          state.toDoFetchClicked++
      }
  },
  actions: {
        fetchUserList(contex){
            return new Promise((resolve, reject) => {
                fetch('https://jsonplaceholder.typicode.com/')
                .then(response => response.json())
                .then(json => contex.commit("fetchUsers", json))
                resolve();
              }).catch( error => {
                  console.log(error);
              })
            
        },

       async fetchToDoList({commit, dispatch}){
            try {
                const user = await dispatch('fetchUserList', 'users')
                const response = await fetch('https://jsonplaceholder.typicode.com/todos')

                const task = await response.json()

                commit('fetchToDos', task)
                commit("incrementFetchClick")
            } catch (error) {
                console.log(error);
            }
        }
    },
    modules: {}
});
