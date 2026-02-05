import type React from 'react';
import { useSearchParams } from 'react-router-dom';
import {
  ARTICLE_ID_QUERY_KEY,
  DEFAULT_PAGE,
  PAGE_QUERY_KEY,
} from '../../../shared/consts.ts';
import { PictureDayPage } from '@/pages/PictureDayPage.tsx';
import { StreamPage } from '@/pages/StreamPage.tsx';
import { ArticlePage } from '@/pages/ArticlePage.tsx';

//TODO: типизация для PAGES

export const MainLayout = () => {
  const [searchParams] = useSearchParams();

  const activePage = searchParams.get(PAGE_QUERY_KEY) ?? DEFAULT_PAGE;
  const articleId = searchParams.get(ARTICLE_ID_QUERY_KEY);

  const PAGES: Record<string, React.ReactNode> = {
    pictureDay: <PictureDayPage />,
    stream: <StreamPage />,
    article: <ArticlePage id={articleId} />,
  };

  return <div className="p-6">{PAGES[activePage]}</div>;
};
