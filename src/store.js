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
  },
  getters: {
    getUuids: (state) => {
      return state.posts.map(item => item.uuid)
    },
    search: (state) => {
      return keyword => state.posts.filter(item =>
        item.title.indexOf(keyword) !== -1
      );
    },
    getByUuid: (state) => {
      return (keyword) => state.posts.filter(item =>
        item.uuid === keyword
      );
    }
  },
  mutations: {
    UPDATE_POST(state, payload) {
      _.remove(state.posts, post => post.uuid === payload.uuid);
      state.posts.push(payload)
    }
  },
  actions: {
    updatePost: (context, payload) => {
      context.commit('UPDATE_POST', payload)
    }
  }
});

export default store;