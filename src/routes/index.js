import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Upload from '~/pages/Upload';
import Profile from '~/pages/Profile';
import Live from '~/pages/Live';
import LoginPage from '~/pages/Login';
import Details from '~/pages/Details';
import CreateStaff from '~/pages/CreateStaff';
import { HeaderOnly, WhiteLayouts } from '~/layouts';
import config from '~/config';

const publicRounter = [{ path: config.route.login, component: LoginPage, layouts: WhiteLayouts }];

const privateRounter = [
    { path: config.route.home, component: Home },
    { path: config.route.following, component: Following },
    { path: config.route.live, component: Live },
    { path: config.route.profile, component: Profile },
    { path: config.route.upload, component: Upload, layouts: HeaderOnly },
    { path: config.route.login, component: LoginPage, layouts: WhiteLayouts },
    { path: config.route.details, component: Details, layouts: HeaderOnly },
    { path: config.route.createStaff, component: CreateStaff, layouts: HeaderOnly },
];

export { privateRounter, publicRounter };
