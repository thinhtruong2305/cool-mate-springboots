import config from '~/config';

//Layout
import ClientLayout from '~/layouts/ClientLayout';
import AdminLayout from '~/layouts/AdminLayout';

//Pages - Client
import Home from '~/pages/Client/Home';
import AdminHome from '~/pages/Admin/Home';
import Shop from '~/pages/Client/Shop';
import DetailProduct from '~/pages/Client/DetailProduct';
import Account from '~/pages/Security/Account';

//Classnames - styles

const publicRoutes = [
    { path: config.routes.home, component: Home, layout: ClientLayout },
    { path: config.routes.shop, component: Shop, layout: ClientLayout },
    { path: config.routes.detailProduct, component: DetailProduct },
];

const privateRoutes = [];

const adminRoutes = [
    { path: config.adminRoutes.admin, component: AdminHome, layout: AdminLayout },
    { path: config.adminRoutes.product, component: Home, layout: AdminLayout },
];

export { publicRoutes, privateRoutes, adminRoutes };
