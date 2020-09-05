import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
      totalClicked: 5,
      teamMates: ['Shibbir', 'Ahmed'],
  },
  mutations: {
      incrementClick(state){
          state.totalClicked++
      },

      addNewTeammate(state, payload){
          state.teamMates.push(payload)
      },
  },
  actions: {},
  modules: {}
});
