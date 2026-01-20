import { useSearchParams } from 'react-router-dom';
import { DEFAULT_PAGE, PAGE_QUERY_KEY } from '../../../shared/consts.ts';
import { PictureDayLayout } from '@/app/layouts/ui/PictureDayLayout.tsx';

const TEMPLATES = {
  pictureDay: <PictureDayLayout />,
  stream: 'node',
};

export const MainLayout = () => {
  const [searchParams] = useSearchParams();

  const activePage = searchParams.get(PAGE_QUERY_KEY) ?? DEFAULT_PAGE;
  return <div className="p-6">{TEMPLATES[activePage]}</div>;
};
