import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    submitted: false
  },
  mutations: {
    SUBMIT_FORM(state) {
      state.submitted = true
    }
  },
  actions: {
    submitForm({ commit }) {
      commit('SUBMIT_FORM')
    }
  }
})
