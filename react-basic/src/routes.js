import HomePage from './pages/HomePage';
import BlogCreatePage from './pages/BlogCreatePage';
import BlogEditPage from './pages/BlogEditPage';
import BlogListPage from './pages/BlogListPage';
import ShowPage from './pages/ShowPage';

const routes = [
  {
    path: '/',
    component: HomePage
  },
  {
    path: '/blogs',
    component: BlogListPage
  },
  {
    path: '/blogs/create',
    component: BlogCreatePage
  },
  {
    path: '/blogs/:id',
    component: ShowPage
  },
  {
    path: '/blogs/edit/:id',
    component: BlogEditPage
  }
]
export default routes;