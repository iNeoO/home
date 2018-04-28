import axios from 'axios'


const apiPath = 'https://api.github.com'

const state = {
  repos: [],
  reposLoading: true
}

const actions = {
  getRepos ({ commit }, user) {
    commit('SET_REPOS_LOADING')
    const reposPromise = axios.get(`${apiPath}/users/${user}/repos`)
    reposPromise.then(({
      data
    }) => {
      commit('SET_REPOS', data)
    }).catch((error) => {
      console.log(error)
    })
    return reposPromise
  }
}

const getters = {
  repos: state => state.repos,
  reposLoading: state => state.reposLoading
}

const mutations = {
  SET_REPOS_LOADING (state) {
    state.reposLoading = true
  },
  UNSET_REPOS_LOADING (state) {
    state.reposLoading = false
  },
  SET_REPOS (state, repos) {
    state.repos = repos
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
