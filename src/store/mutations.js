import { RECEIVE_GOODS_SHOP, RECEIVE_HOME_MULTIDATA, ADD_COUNTER, ADD_TO_CART } from "./mutation-types"

export default {
  [RECEIVE_GOODS_SHOP](state, { goods, shop }) {
    state.goods = goods
    state.shop = shop
  },

  [RECEIVE_HOME_MULTIDATA](state, { banners, recommends }) {
    state.banners = banners
    state.recommends = recommends
  },
  [ADD_COUNTER](state, payload) {
    payload.count++
  },
  [ADD_TO_CART](state, payload) {
    payload.checked = false
    state.cartList.push(payload)
  }
}