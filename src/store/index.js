import { createStore } from 'vuex'
import cart from './cart/index.js'

export default createStore({
  modules: {
    cart
  }
})
