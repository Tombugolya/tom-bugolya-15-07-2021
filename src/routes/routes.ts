import Home from '../pages/Home';
import Favorites from '../pages/Favorites';

const routes = {
  home: {
    name: 'Home',
    to: '/',
    component: Home,
  },
  favorites: {
    name: 'Favorites',
    to: '/favorites',
    component: Favorites,
  },
};

export default routes;
