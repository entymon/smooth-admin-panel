import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    posts: [
      {
        uuid: '1',
        title: 'Test11 Title',
        body: 'Someqwewe wewew e wqe  e w ewew e wq ewqe',
        author: 'entymon',
        image: 'obrazek'
      },
      {
        uuid: '2',
        title: 'Test22 Title',
        body: 'Someqwewe wewew e wqe  e w ewew e wq ewqe',
        author: 'entymon',
        image: 'obrazek'
      },
      {
        uuid: '3',
        title: 'Test33 Title',
        body: 'Someqwewe wewew e wqe  e w ewew e wq ewqe',
        author: 'entymon',
        image: 'obrazek'
      }
    ],
    routeName: ''
  },
  mutations: {
    UPDATE_ROUTE_NAME(state, name) {
      state.routeName = name
    }
  },
  actions: {
    updateRouteName(context, name) {
      context.commit('UPDATE_ROUTE_NAME', name)
    }
  }
});

export default store;