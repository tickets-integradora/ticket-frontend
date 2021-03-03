import getHash from './../utils/getHash.js';
import resolveRoutes from '../utils/resolveRoutes.js';
import Login from './../../views/pages/login/login.view.js';
import Register from './../../views/pages/register/register.view.js';
import Error404 from './../../views/pages/error404/error404.view.js';
import Tickets from './../../views/pages/tickets/tickets.view.js';

// Rutas a renderizar
const routes = {
	'/': Login,
	'/login': Login,
	'/register': Register,
	'/tickets': Tickets,
};

// Router
const router = async () => {
	let hash = getHash();
	let route = await resolveRoutes(hash);
	let render = routes[route] ? routes[route] : Error404;
	content.innerHTML = await render();
};

export default router;
