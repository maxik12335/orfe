import { Routes, Route, Navigate } from 'react-router-dom';
import Loader from './loader/Loader';
import { lazy, Suspense } from 'react';

// Импорты страниц
const Main =  lazy(() => import('../Pages/Main/Main'));
const About =  lazy(() => import('../Pages/About/About'));
const Uslugy =  lazy(() => import('../Pages/Uslugy/Uslugy'));
const Mark =  lazy(() => import('../Pages/Mark/Mark'));
const BeClient =  lazy(() => import('../Pages/BeClient/BeClient'));
const Blog =  lazy(() => import('../Pages/Blog/Blog'));
const Shop =  lazy(() => import('../Pages/Shop/Shop'));
const Contacts =  lazy(() => import('../Pages/Contacts/Contacts'));


const AppRouter = () => {

  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        {/* Публичные */}

        {/* menu */}
          <Route path="/" element={<Main />} />
          <Route path="/about" element={<About />} />
          <Route path="/uslugy" element={<Uslugy />} />
          <Route path="/mark" element={<Mark />} />
          <Route path="/beclient" element={<BeClient />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/contacts" element={<Contacts />} />
          
          {/* <Route path="/catalog" element={<Catalog />} />
          <Route path="/catalog/:id" element={<Product />} /> */}

        {/* 404 */}
        <Route path="*" element={<Navigate to="/about" />} />
      </Routes>
    </Suspense>
  );
};

export default AppRouter;