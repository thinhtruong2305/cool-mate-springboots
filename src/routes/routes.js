import config from '~/config';

//Layout
import ClientLayout from '~/layouts/ClientLayout';

//Pages - Client
import Home from '~/pages/Client/Home';
import Shop from '~/pages/Client/Shop';
import Detail from '~/pages/Client/Detail';
import Account from '~/pages/Client/Account';

const publicRoutes = [
    { path: config.routes.home, component: Home, layout: ClientLayout },
    { path: config.routes.shop, component: Shop, layout: ClientLayout },
    { path: config.routes.detail, component: Detail },
    { path: config.routes.account, component: Account },
];

const privateRoutes = {};

export { publicRoutes, privateRoutes };
