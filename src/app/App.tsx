import { Navigate, Outlet, Route, Routes } from 'react-router-dom';
import { Header } from '@/components/custom/Header/ui/Header.tsx';
import { PictureDayPage } from '@/pages/PictureDayPage.tsx';
import { StreamPage } from '@/pages/StreamPage.tsx';
import { ArticlePage } from '@/pages/ArticlePage.tsx';
import { SourcesPage } from '@/pages/SourcesPage.tsx';
import { SourcePage } from '@/pages/SourcePage.tsx';

function PageLayout() {
  return (
    <div className="p-6">
      <Outlet />
    </div>
  );
}

function App() {
  return (
    <div className="flex flex-col gap-4">
      <Header />
      <Routes>
        <Route element={<PageLayout />}>
          <Route path="/" element={<PictureDayPage />} />
          <Route path="/stream" element={<StreamPage />} />
          <Route path="/article/:id" element={<ArticlePage />} />
          <Route path="/sources" element={<SourcesPage />} />
          <Route path="/sources/:id" element={<SourcePage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
