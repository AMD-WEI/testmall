import { getGoodsDetails, Goods, Shop } from "network/detail";
import { RECEIVE_GOODS_SHOP, RECEIVE_HOME_MULTIDATA, ADD_COUNTER, ADD_TO_CART } from "./mutation-types"
import { getHomeMultidata } from "network/home"

export default {
  //异步获取详情页json
  async GoodsDetails(context, payload) {
    await getGoodsDetails(payload).then(res => {
      res = res.data
      const data = res.data.result
      const goods = new Goods(
        data.itemInfo,
        data.rateInfo,
        data.skuInfo,
        data.priceInfo,
        data.shopInfo,
        data.topImages
      )
      const shop = new Shop(data.shopInfo);
      context.commit(RECEIVE_GOODS_SHOP, { goods, shop })
    })
  },

  //异步获取首页的轮播图和推荐
  async getHomeMultidata(context) {
    await getHomeMultidata().then(res => {
      res = res.data
      const banners = res.data.banner_list;
      const recommends = res.data.recommend_list;
      context.commit(RECEIVE_HOME_MULTIDATA, { banners, recommends })
    })
  },

  addCart(context, payload) {
    let oldProduct = context.state.cartList.find(item => item.iid === payload.iid)
    if (oldProduct) {
      context.commit(ADD_COUNTER, oldProduct)
    } else {
      payload.count = 1
      context.commit(ADD_TO_CART, payload)
    }
  }
}