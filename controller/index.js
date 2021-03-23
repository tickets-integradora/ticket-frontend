import router from './routes/index.js';
import getCurrentUser from './utils/getCurrentUser.js';
let currentUser = getCurrentUser();

window.addEventListener('load', router);
window.addEventListener('hashchange', router);
