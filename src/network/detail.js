import { request } from './request';
export function getGoodsDetails(iid) {
  return request({
    url: 'http://127.0.0.1:5000/index/goodsDetails',
    params: {
      iid
    }
  })
}


export class Goods {
  constructor(itemInfo, rateInfo, skuInfo, priceInfo, shopInfo, topImages) {
    this.title = itemInfo.seo.keywords
    this.oldPrice = itemInfo.highPrice
    this.realPrice = itemInfo.lowNowPrice
    this.sales = rateInfo.sales
    this.totalStock = skuInfo.totalStock
    this.priceTagestext = priceInfo.priceTags[0].text
    this.bgColor = priceInfo.priceTags[0].bgColor
    this.textColor = priceInfo.priceTags[0].textColor
    this.services = shopInfo.services
    this.topImages = topImages
  }
}

export class Shop {
  constructor(shopInfo) {
    this.logo = shopInfo.shopLogo
    this.name = shopInfo.name
    this.fans = shopInfo.cFans
    this.sells = shopInfo.cSells
    this.levels = shopInfo.levels
    this.goodsCount = shopInfo.cGoods
    this.score = shopInfo.score
  }
}

export class ParamInfo {
  constructor(info) {
    this.image = info.image ? info.image[0] : "";
    this.set = info.set;
  }
}
