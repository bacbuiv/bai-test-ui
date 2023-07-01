import Home from '~/pages/Home';
import Profile from '~/pages/Profile';
import Products from '~/pages/Products';
import MailPage from '~/pages/MailPage';
import Login from '~/pages/Login';
import Blog from '~/pages/Blog';
import config from '~/config';

//public routes
const publicRoutes = [
    { path: config.routes.home, component: Home },
    { path: config.routes.profile, component: Profile },
    { path: config.routes.products, component: Products },
    { path: config.routes.mailPage, component: MailPage },
    { path: config.routes.login, component: Login },
    { path: config.routes.blog, component: Blog },
    // Mặc định nếu ko có layout => render ra DefaultLayout
    //....
];

// private những page cần đăng nhập mới hiển thị
const privateRoutes = [];

export { publicRoutes, privateRoutes };
