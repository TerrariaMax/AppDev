import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import LoginView from '../views/LoginView.vue'
import AccessDenied from '../views/AccessDenied.vue'
import store from '../store/store';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'About',
    component: AboutView
  },
  {
    path:'/login',
    name:'Login',
    component: LoginView
  },
  {
    path: '/access-denied',
    name: 'AccessDenied',
    component: AccessDenied
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

// router.beforeEach((to, from, next) => {
//     // Check if the user is not authenticated and is trying to access a route other than the Login page
//     if (!store.state.isAuthenticated && to.name !== 'Login') {
//         // Redirect the user to the Login page
//         return ({ name: 'Login'});
//     } else {
//         next();
//     }
// });


router.beforeEach((to, from, next) => {
    const isAuthenticated = store.state.isAuthenticated;

     // Allow access to Home and Login pages for everyone
     if (to.name === 'Home' || to.name === 'Login' && !isAuthenticated) {
        next(); // Proceed to the route
    } 
    // Redirect non-authenticated users to Login page for all other routes
    // else if (!isAuthenticated) {
    //     next({ name: 'Login' });
    // } 
    // Redirect authenticated users away from AccessDenied page
    else if (to.name === 'AccessDenied' && isAuthenticated) {
        next({ name: 'Home' });
    } 
    // Allow access to other routes for authenticated users
    else {
        next(); // Proceed to the route
    }

    // // Check if the target route requires authentication
    // if (to.name !== 'Login' && to.name !== 'AccessDenied' && !isAuthenticated) {
    //     // Redirect to the Login page if the user is not authenticated
    //     next({ name: 'Login' });
    // } else if (to.name === 'AccessDenied' && isAuthenticated) {
    //     // Redirect authenticated users away from the AccessDenied page
    //     next({ name: 'Home' });
    // } else {
    //     // Proceed to the target route
    //     next();
    // }
});

export default router