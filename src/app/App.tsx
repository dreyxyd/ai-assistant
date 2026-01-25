import { Header } from '@/components/custom/Header/ui/Header.tsx';
import { MainLayout } from '@/app/layouts/MainLayout.tsx';

function App() {
  return (
    <div className="flex flex-col justify-center gap-4 bg-stone-50">
      <Header />
      <MainLayout />
    </div>
  );
}

export default App;
