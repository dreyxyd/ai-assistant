import { useSearchParams } from 'react-router-dom';
import { DEFAULT_PAGE, PAGE_QUERY_KEY } from '../../../shared/consts.ts';
import { PictureDayPage } from '@/pages/PictureDayPage.tsx';
import { StreamPage } from '@/pages/StreamPage.tsx';

//TODO: типизация для PAGES

const PAGES = {
  pictureDay: <PictureDayPage />,
  stream: <StreamPage />,
};

export const MainLayout = () => {
  const [searchParams] = useSearchParams();

  const activePage = searchParams.get(PAGE_QUERY_KEY) ?? DEFAULT_PAGE;
  return <div className="p-6">{PAGES[activePage]}</div>;
};
