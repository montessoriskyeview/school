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

export const PRIMARY_NAVIGATION_ITEMS: NavigationItemContent[] = [
  {
    key: 'home',
    text: 'Home',
    path: '/',
  },
  {
    key: 'schedule',
    text: 'Schedule',
    path: '/schedule',
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
    key: 'faq',
    text: 'FAQ',
    path: '/faq',
  },
];

export const FOOTER_SECONDARY_NAVIGATION_ITEMS: NavigationItemContent[] = [
  {
    key: 'location',
    text: 'Location',
    path: '/location',
  },
  {
    key: 'parentsResources',
    text: 'Parents Resources',
    path: '/parents',
  },
  {
    key: 'enrollments',
    text: 'Enrollments',
    path: '/enrollments',
  },
  {
    key: 'teachers',
    text: 'Teachers',
    path: '/teachers',
  },
  {
    key: 'philosophy',
    text: 'Philosophy',
    path: '/philosophy',
  },
  {
    key: 'accessibility',
    text: 'Accessibility',
    path: '/accessibility',
  },
  {
    key: 'blog',
    text: 'Blog',
    path: '/blog',
  },
  {
    key: 'contact',
    text: 'Contact',
    path: '/contact',
  },
];

export const NAVIGATION_ITEMS: NavigationItemContent[] = [
  ...PRIMARY_NAVIGATION_ITEMS,
  ...FOOTER_SECONDARY_NAVIGATION_ITEMS.map(item => ({
    ...item,
    isInCollapseMenu: true,
  })),
];
