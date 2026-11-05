import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

// Same menu structure as parts/header/menu.php
export const MENU = [
  {
    label: 'Home',
    to: '/',
    children: [
      { label: 'Home Page One', to: '/' },
      { label: 'Home Page Two', to: '/index-2' },
      { label: 'Home Page Three', to: '/index-3' },
      { label: 'Home Page Four', to: '/index-4' },
      { label: 'Home Page Five', to: '/index-5' },
    ],
  },
  {
    label: 'Research',
    to: '/',
    children: [
      { label: 'Research', to: '/research' },
      { label: 'Research Details', to: '/research-details' },
    ],
  },
  {
    label: 'Service',
    to: '/',
    children: [
      { label: 'Our Services', to: '/services' },
      { label: 'Biochemistry Tests', to: '/service-details' },
      { label: 'Microbiology Test', to: '/service-details-2' },
      { label: 'Histopatology', to: '/service-details-3' },
      { label: 'Hormonal Assay', to: '/service-details-4' },
      { label: 'Clinical Pathology', to: '/service-details-5' },
      { label: 'Cytopatholgy', to: '/service-details-6' },
    ],
  },
  {
    label: 'Pages',
    to: '/',
    children: [
      {
        label: 'Event',
        to: '/',
        children: [
          { label: 'Events', to: '/events' },
          { label: 'Event Details', to: '/events-details' },
        ],
      },
      {
        label: 'Team',
        to: '/',
        children: [
          { label: 'Team One', to: '/team' },
          { label: 'Team Two', to: '/team-2' },
          { label: 'Team Details', to: '/team-details' },
        ],
      },
      { label: 'About Us', to: '/about' },
      { label: 'Our History', to: '/history' },
      { label: 'FAQ’s', to: '/faq' },
      { label: 'Testimonials', to: '/testimonials' },
      { label: 'Gallery', to: '/gallery' },
      { label: '404', to: '/error' },
    ],
  },
  {
    label: 'Blog',
    to: '/',
    children: [
      { label: 'Blog Style One', to: '/blog' },
      { label: 'Blog Style Two', to: '/blog-2' },
      { label: 'Blog Style Three', to: '/blog-3' },
      { label: 'Blog Details', to: '/blog-details' },
    ],
  },
  { label: 'Contact', to: '/contact' },
];

function isActive(item, pathname) {
  if (item.children) return item.children.some((c) => isActive(c, pathname));
  return item.to === pathname;
}

function MenuItem({ item, mobile, pathname }) {
  const [open, setOpen] = useState(false);
  const hasChildren = !!item.children;
  const cls = [hasChildren ? 'dropdown' : '', isActive(item, pathname) ? 'current' : '']
    .filter(Boolean)
    .join(' ');

  return (
    <li className={cls || undefined}>
      <Link to={item.to}>{item.label}</Link>
      {hasChildren && (
        <ul style={mobile ? { display: open ? 'block' : 'none' } : undefined}>
          {item.children.map((c) => (
            <MenuItem key={c.label} item={c} mobile={mobile} pathname={pathname} />
          ))}
        </ul>
      )}
      {hasChildren && (
        <div className={'dropdown-btn' + (open ? ' open' : '')} onClick={() => setOpen((o) => !o)}>
          <span className="fas fa-angle-down"></span>
        </div>
      )}
    </li>
  );
}

export default function Menu({ mobile = false }) {
  const { pathname } = useLocation();
  return (
    <ul className="navigation clearfix">
      {MENU.map((item) => (
        <MenuItem key={item.label} item={item} mobile={mobile} pathname={pathname} />
      ))}
    </ul>
  );
}
