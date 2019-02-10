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
  getters: {
    getUuids: (state) => {
      return state.posts.map(post => post.uuid)
    }
  },
  mutations: {
    UPDATE_ROUTE_NAME(state, name) {
      state.routeName = name
    },
    UPDATE_POST(state, payload) {
      _.remove(state.posts, post => post.uuid === payload.uuid);
      state.posts.push(payload)
    }
  },
  actions: {
    updateRouteName(context, name) {
      context.commit('UPDATE_ROUTE_NAME', name)
    },
    updatePost: (context, payload) => {
      context.commit('UPDATE_POST', payload)
    }
  }
});

export default store;