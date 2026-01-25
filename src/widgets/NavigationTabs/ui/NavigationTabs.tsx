import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs.tsx';
import { useSearchParams } from 'react-router-dom';
import { DEFAULT_PAGE, PAGE_QUERY_KEY } from '../../../../shared/consts.ts';

export const NavigationTabs = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const activePage = searchParams.get(PAGE_QUERY_KEY) ?? DEFAULT_PAGE;

  const handleTabChange = (value: string) => {
    setSearchParams((prev) => {
      const next = new URLSearchParams(prev);
      next.set(PAGE_QUERY_KEY, value);
      return next;
    });
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
