import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Admin from "../admin/Admin.vue";
import Dashboard from "../admin/Dashboard.vue";
import Category from "../admin/Category.vue";
import Products from "../admin/Products.vue";
import Orders from "../admin/Orders.vue";
import Reports from "../admin/Reports.vue";
import Profile from "../admin/Profile.vue";
import Setting from "../admin/Setting.vue";
import {fb} from "../firebase";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/admin",
    name: "Admin",    
    component: Admin,
    meta: {requiresAuth: true},
    children: [
      {
        path: "dashboard",
        name: "Dashboard",
        component: Dashboard
      },
      {
        path: "category",
        name: "Category",
        component: Category
      },
      {
        path: "products",
        name: "Products",
        component: Products
      },
      {
        path: "orders",
        name: "Orders",
        component: Orders
      },
      {
        path: "reports",
        name: "Reports",
        component: Reports
      },
      {
        path: "profile",
        name: "Profile",
        component: Profile
      },
      {
        path: "setting",
        name: "Setting",
        component: Setting
      },
    ]
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

router.beforeEach((to, from, next)=>{
  const requiresAuth = to.matched.some(x => x.meta.requiresAuth)
  const currentUser = fb.auth().currentUser

  if (requiresAuth && !currentUser) {
    next('/')
  } else if(requiresAuth && currentUser){
    next()
  } else {
    next()
  }
})

export default router;
