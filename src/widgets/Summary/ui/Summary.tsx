import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card.tsx';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs.tsx';
import { useState } from 'react';
import { summaryMap } from '@/shared/mocks.ts';
import { SummaryRow } from '@/widgets/Summary/ui/SummaryRow.tsx';
import { SummaryTextRow } from '@/widgets/Summary/ui/SummaryTextRow.tsx';

export const Summary = () => {
  const [activeTab, setActiveTab] = useState('timeline');
  const summarySlice = summaryMap.slice(0, 8);
  return (
    <Card className="w-full">
      <CardHeader className="border-b px-4 flex flex-row justify-between items-center">
        <CardTitle className="text-xl font-bold">Саммари</CardTitle>
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList>
            <TabsTrigger value="timeline">Таймлайн</TabsTrigger>
            <TabsTrigger value="text">Текст</TabsTrigger>
          </TabsList>
        </Tabs>
      </CardHeader>
      <CardContent className="flex flex-col h-full">
        {summarySlice.map((item, index) =>
          activeTab == 'timeline' ? (
            <SummaryRow key={item.id} data={item} isLast={index == summarySlice.length - 1} />
          ) : (
            <SummaryTextRow data={item} key={item.id} />
          ),
        )}
        <button className="w-full h-10 rounded-xl font-semibold cursor-pointer mt-10">
          Показать всю историю ({summarySlice.length} факта)
        </button>
      </CardContent>
    </Card>
  );
};
