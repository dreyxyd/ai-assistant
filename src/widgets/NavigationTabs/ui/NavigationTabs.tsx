import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs.tsx';
import { useLocation, useNavigate } from 'react-router-dom';
import { ROUTES } from '../../../../shared/consts.ts';

const pathToTab: Record<string, string> = {
  [ROUTES.pictureDay]: 'pictureDay',
  [ROUTES.stream]: 'stream',
};

export const NavigationTabs = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const activePage =
    pathToTab[location.pathname] ??
    (location.pathname.startsWith('/article') ? 'pictureDay' : 'pictureDay');

  const handleTabChange = (value: string) => {
    if (value === 'pictureDay') navigate(ROUTES.pictureDay);
    if (value === 'stream') navigate(ROUTES.stream);
  };

  return (
    <Tabs value={activePage} onValueChange={handleTabChange}>
      <TabsList>
        <TabsTrigger value="pictureDay">Картинка дня</TabsTrigger>
        <TabsTrigger value="stream">Поток</TabsTrigger>
      </TabsList>
    </Tabs>
  );
};
