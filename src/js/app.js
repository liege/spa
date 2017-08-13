import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './../components/app.vue';



Vue.use(VueRouter);

var router = new VueRouter();
router.map({
    '/': {
        name: 'index',
        component: view('index')
    },
    '/product/list/:deviceId/:dataId': {
        name: 'product-list',
        component: view('product-list')
    },
    '/product/details/:deviceId/:dataId': {
        name: 'product-details',
        component: view('product-details')
    },
    '/cart': {
        name: 'cart',
        component: view('cart')
    },
    '/order': {
        name: 'order',
        component: view('order')
    },
    '/address/edit': {
        name: 'edit-address',
        component: view('edit-address')
    },
    '/address/manage': {
        name: 'manage-address',
        component: view('manage-address')
    }

});

router.beforeEach(function(transition) {
    console.log(transition.to.name)
    // $('body').attr('class', 'page-' + transition.to.name);

    // try {
    //   transition.next()
    // } catch (e) {
    //   transition.abort()
    //   console.log('route caught', e)
    // }

    if (transition.to.path === '/forbidden') {
        transition.abort()
    } else {
        transition.next()
    }
});

/**
 * Asynchronously load view (Webpack Lazy loading compatible)
 * @param  {string}   name     the filename (basename) of the view to load.
 */
function view(name) {
    return function(resolve) {
        require(['./../components/' + name + '.vue'], resolve);
    }
};

router.start(App, 'app'); //插入html app标签
