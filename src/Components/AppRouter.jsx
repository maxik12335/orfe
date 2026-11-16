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

const MainEn =  lazy(() => import('../PagesEn/MainEn/MainEn'));
const AboutEn =  lazy(() => import('../PagesEn/AboutEn/AboutEn'));
const UslugyEn =  lazy(() => import('../PagesEn/UslugyEn/UslugyEn'));
const MarkEn =  lazy(() => import('../PagesEn/MarkEn/MarkEn'));
const BeClientEn =  lazy(() => import('../PagesEn/BeClientEn/BeClientEn'));
const BlogEn =  lazy(() => import('../PagesEn/BlogEn/BlogEn'));
const ShopEn =  lazy(() => import('../PagesEn/ShopEn/ShopEn'));
const ContactsEn =  lazy(() => import('../PagesEn/ContactsEn/ContactsEn'));


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

          {/* en */}
          <Route path="/en" element={<MainEn />} />
          <Route path="/en/about" element={<AboutEn />} />
          <Route path="/en/uslugy" element={<UslugyEn />} />
          <Route path="/en/mark" element={<MarkEn />} />
          <Route path="/en/beclient" element={<BeClientEn />} />
          <Route path="/en/blog" element={<BlogEn />} />
          <Route path="/en/shop" element={<ShopEn />} />
          <Route path="/en/contacts" element={<ContactsEn />} />
          
          {/* <Route path="/catalog" element={<Catalog />} />
          <Route path="/catalog/:id" element={<Product />} /> */}

        {/* 404 */}
        <Route path="*" element={<Navigate to="/about" />} />
      </Routes>
    </Suspense>
  );
};

export default AppRouter;