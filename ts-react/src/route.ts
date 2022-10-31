import Home from './pages/home/Home';
import PostCreatePage from './pages/post/PostCreatePage';
import PostDetailPage from './pages/post/PostDetailPage';
import PostEditPage from './pages/post/PostEditPage';
import PostListPage from './pages/post/PostListPage';

interface RouteProp {
  path: string,
  component: () => JSX.Element
}

const routes: RouteProp[] = [
  {
    path: '/',
    component: Home,
  },
  {
    path: '/posts/create',
    component: PostCreatePage,
  },
  {
    path: '/posts/edit/:id',
    component: PostEditPage,
  },
  {
    path: '/posts',
    component: PostListPage,
  },
  {
    path: '/posts/:id',
    component: PostDetailPage,
  }
]

export default routes;