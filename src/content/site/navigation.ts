export type NavigationItemKey =
  | 'home'
  | 'parentsResources'
  | 'registration'
  | 'parentInvolvement'
  | 'schedule'
  | 'location'
  | 'enrollments'
  | 'teachers'
  | 'faq'
  | 'philosophy'
  | 'accessibility'
  | 'blog'
  | 'contact';

export interface NavigationItemContent {
  key: NavigationItemKey;
  text: string;
  path: string;
  isInCollapseMenu?: boolean;
}

export const NAVIGATION_ITEMS: NavigationItemContent[] = [
  {
    key: 'home',
    text: 'Home',
    path: '/',
  },
  {
    key: 'parentsResources',
    text: 'Parents Resources',
    path: '/parents',
    isInCollapseMenu: true,
  },
  {
    key: 'registration',
    text: 'Registration',
    path: '/registration',
  },
  {
    key: 'parentInvolvement',
    text: 'Parent Involvement',
    path: '/parent-involvement',
  },
  {
    key: 'schedule',
    text: 'Schedule',
    path: '/schedule',
  },
  {
    key: 'location',
    text: 'Location',
    path: '/location',
  },
  {
    key: 'enrollments',
    text: 'Enrollments',
    path: '/enrollments',
    isInCollapseMenu: true,
  },
  {
    key: 'teachers',
    text: 'Teachers',
    path: '/teachers',
    isInCollapseMenu: true,
  },
  {
    key: 'faq',
    text: 'FAQ',
    path: '/faq',
    isInCollapseMenu: true,
  },
  {
    key: 'philosophy',
    text: 'Philosophy',
    path: '/philosophy',
    isInCollapseMenu: true,
  },
  {
    key: 'accessibility',
    text: 'Accessibility',
    path: '/accessibility',
    isInCollapseMenu: true,
  },
  {
    key: 'blog',
    text: 'Blog',
    path: '/blog',
    isInCollapseMenu: true,
  },
  {
    key: 'contact',
    text: 'Contact',
    path: '/contact',
    isInCollapseMenu: true,
  },
];
