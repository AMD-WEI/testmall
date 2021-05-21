import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/home/Home'
// import Cart from '../views/cart/Cart'
// import Category from '../views/category/Category'
// import Profile from '../views/profile/Profile'

//懒加载
const Home = () => import("views/home/Home")
const Cart = () => import("views/cart/Cart")
const Category = () => import("views/category/Category")
const Profile = () => import("views/profile/Profile")
const Detail = () => import("views/detail/Detail")

Vue.use(VueRouter)

const routes = [
  {
    path: "",
    redirect: "/home"
  },
  {
    path: "/home",
    component: Home
  },
  {
    path: "/cart",
    component: Cart
  },
  {
    path: "/Category",
    component: Category
  },
  {
    path: "/profile",
    component: Profile
  }
  ,
  {
    path: "/detail:tradeItemId",
    component: Detail
  }
]
export default new VueRouter({
  routes,
  mode: "history",
  // base: "./"
  base: '/testmall/'
})