import Vue from 'vue'
import Vuex from 'vuex'
import _ from 'lodash'

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
    postResults: []
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
    },
    REMOVE_POST(state, payload) {
      _.remove(state.posts, post => post.uuid === payload.uuid);
    },
    SET_POSTS_RESULTS(state, payload) {
      state.postResults = payload
    }
  },
  actions: {
    updatePost: (context, payload) => {
      context.commit('UPDATE_POST', payload)
    },
    removePost: (context, payload) => {
      context.commit('REMOVE_POST', payload)
    },
    /**
     * Search posts and set results in mutations
     * @param context
     * @param payload
     */
    searchPost: (context, payload) => {
      const posts = context.getters.search(payload);
      context.commit('SET_POSTS_RESULTS', posts)
    }
  }
});

export default store;