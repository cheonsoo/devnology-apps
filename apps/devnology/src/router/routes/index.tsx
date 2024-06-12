import React from 'react';
import { Routes, Route } from 'react-router-dom';

const Home = React.lazy(() => import('@/pages/home'));
// const Home = React.lazy(() => import('@/pages/home/dashboard'));
const Apps = React.lazy(() => import('@/pages/apps'));
const App = React.lazy(() => import('@/components/app'));
const Posts = React.lazy(() => import('@/pages/posts'));
const Post = React.lazy(() => import('@/components/post'));
const About = React.lazy(() => import('@/pages/about'));

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="apps" element={<Apps />} />
      <Route path="app/*">
        <Route path=":id" element={<App />} />
      </Route>
      <Route path="posts" element={<Posts />} />
      <Route path="post/*">
        <Route path=":id" element={<Post />} />
      </Route>
      <Route path="about" element={<About />} />
    </Routes>
  );
};

export default AppRoutes;
