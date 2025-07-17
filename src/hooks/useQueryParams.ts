import { useSearchParams, useNavigate, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { PAGE_ROUTES } from '../utils/navigation';

export const useQueryParams = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const location = useLocation();

  // Handle page parameter navigation
  useEffect(() => {
    const pageParam = searchParams.get('p');
    if (pageParam && location.pathname === '/') {
      const targetRoute = PAGE_ROUTES[pageParam];
      if (targetRoute) {
        // Remove the query parameter and navigate
        searchParams.delete('p');
        const newSearch = searchParams.toString();
        const newUrl = newSearch ? `${targetRoute}?${newSearch}` : targetRoute;
        navigate(newUrl, { replace: true });
      }
    }
  }, [searchParams, navigate, location.pathname]);

  const setPageParam = (page: string) => {
    setSearchParams({ p: page });
  };

  const getPageParam = () => searchParams.get('p');

  const clearPageParam = () => {
    searchParams.delete('p');
    setSearchParams(searchParams);
  };

  return {
    searchParams,
    setSearchParams,
    setPageParam,
    getPageParam,
    clearPageParam,
  };
};
