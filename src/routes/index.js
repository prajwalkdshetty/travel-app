import { AsyncDetails, AsyncConfirmation, AsyncAdmin, AsyncAdd, AsyncRemove } from './dynamic';
import Home from './../components/modules/home/Home';

const routes = [
    { path: '/', exact: true, component: Home },
    { path: '/details', component: AsyncDetails },
    { path: '/confirmation', component: AsyncConfirmation },
    { path: '/admin', component: AsyncAdmin, exact: true },
    { path: '/admin/addItems', component: AsyncAdd },
    { path: '/admin/removeItems', component: AsyncRemove },
];
export default routes;

