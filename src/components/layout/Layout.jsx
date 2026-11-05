import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import MobileNav from './MobileNav';
import SearchPopup from './SearchPopup';
import BackToTop from './BackToTop';
import { initPlugins } from '../../legacy/plugins';

export default function Layout({ title, children }) {
  const { pathname } = useLocation();

  // document title
  useEffect(() => {
    if (title) document.title = title.replace('PHP Template', 'React Template');
  }, [title]);

  // new page => top of page, close menus, init jQuery widgets for this page's DOM
  useEffect(() => {
    window.scrollTo(0, 0);
    document.body.classList.remove('mobile-menu-visible');
    document.getElementById('search-popup')?.classList.remove('popup-visible');
    return initPlugins();
  }, [pathname]);

  // header sticky style + mobile menu + search popup (once per Layout mount)
  useEffect(() => {
    const onScroll = () => {
      const header = document.querySelector('.main-header');
      if (header) header.classList.toggle('fixed-header', window.scrollY >= 110);
    };
    onScroll();

    const onClick = (e) => {
      const t = e.target;
      if (t.closest('.mobile-nav-toggler')) document.body.classList.add('mobile-menu-visible');
      else if (t.closest('.mobile-menu .menu-backdrop, .mobile-menu .close-btn'))
        document.body.classList.remove('mobile-menu-visible');
      else if (t.closest('.search-toggler')) document.getElementById('search-popup')?.classList.add('popup-visible');
      else if (t.closest('.close-search, .search-popup .overlay-layer'))
        document.getElementById('search-popup')?.classList.remove('popup-visible');
    };
    const onKey = (e) => {
      if (e.key === 'Escape') document.getElementById('search-popup')?.classList.remove('popup-visible');
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    document.addEventListener('click', onClick);
    document.addEventListener('keydown', onKey);
    return () => {
      window.removeEventListener('scroll', onScroll);
      document.removeEventListener('click', onClick);
      document.removeEventListener('keydown', onKey);
    };
  }, []);

  return (
    <>
      <div className="boxed_wrapper ltr">{children}</div>
      <MobileNav />
      <SearchPopup />
      <BackToTop />
    </>
  );
}
