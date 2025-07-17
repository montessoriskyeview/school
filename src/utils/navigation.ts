// Navigation utilities for query parameter support

export const PAGE_ROUTES: Record<string, string> = {
  registration: '/registration',
  tuition: '/tuition',
  schedule: '/schedule',
  location: '/location',
  philosophy: '/philosophy',
  contact: '/contact',
  faq: '/faq',
  accessibility: '/accessibility',
  review: '/review',
  blog: '/blog',
  home: '/',
};

export const ROUTE_TO_PAGE: Record<string, string> = Object.entries(
  PAGE_ROUTES
).reduce((acc, [page, route]) => {
  acc[route] = page;
  return acc;
}, {} as Record<string, string>);

export const getPageFromRoute = (route: string): string | null => {
  return ROUTE_TO_PAGE[route] || null;
};

export const getRouteFromPage = (page: string): string | null => {
  return PAGE_ROUTES[page] || null;
};

export const createQueryUrl = (
  page: string,
  additionalParams?: Record<string, string>
): string => {
  const params = new URLSearchParams();
  params.set('p', page);

  if (additionalParams) {
    Object.entries(additionalParams).forEach(([key, value]) => {
      params.set(key, value);
    });
  }

  return `/?${params.toString()}`;
};
