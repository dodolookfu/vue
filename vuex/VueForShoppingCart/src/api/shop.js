const products = [
  {"id": 1, "title": "桌遊", "price": 29900, "inventory": 22,"current": 0 ,"img": require("@/assets/img/img1.png")},
  {"id": 2, "title": "忠烈祠", "price": 22990, "inventory": 10,"current": 0 ,"img": require("@/assets/img/img2.png")},
  {"id": 3, "title": "駁二特區", "price": 32999, "inventory": 20,"current": 0 ,"img": require("@/assets/img/img3.png")},
  {"id": 4, "title": "植物園", "price": 26999, "inventory": 20,"current": 0 ,"img": require("@/assets/img/img4.png")},
  {"id": 5, "title": "靜思湖", "price": 49900, "inventory": 40,"current": 0 ,"img": require("@/assets/img/img5.png")},
  {"id": 6, "title": "植物園旁", "price": 25000, "inventory": 40,"current": 0 ,"img": require("@/assets/img/img6.png")},
  {"id": 7, "title": "大草原", "price": 48000, "inventory": 40,"current": 0 ,"img": require("@/assets/img/img7.png")},
  {"id": 8, "title": "映霞湖", "price": 49900, "inventory": 40,"current": 0 ,"img": require("@/assets/img/img8.png")},
  {"id": 9, "title": "夕陽", "price": 25000, "inventory": 40,"current": 0 ,"img": require("@/assets/img/img9.png")},
  {"id": 10, "title": "日出", "price": 50000, "inventory": 40,"current": 0 ,"img": require("@/assets/img/img10.png")},
  {"id": 11, "title": "七星潭", "price": 28999, "inventory": 40,"current": 0 ,"img": require("@/assets/img/img11.png")},
]

export default {
  getProducts (show) {
    setTimeout(() => show(products), 100)
  },
}