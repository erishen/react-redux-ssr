/**
 * Created by lei_sun on 2018/6/7.
 */
import Test from './test';
import Bootstrap from './test/bootstrap';
import Lazyload from './test/lazyload';

// ssr => default true, can set false.
export default {
    test: {
        action: 'test',
        component: Test,
        preloadedState: { pageNum: 20 }
    },
    bootstrap: {
        action: 'bootstrap',
        component: Bootstrap
    },
    lazyload: {
        action: 'lazyload',
        component: Lazyload
    }
}