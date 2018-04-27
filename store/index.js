import Vuex from 'vuex'
import modules from './modules'

export default () => {
  return new Vuex.Store({
    modules,
    strict: false
  })
}
