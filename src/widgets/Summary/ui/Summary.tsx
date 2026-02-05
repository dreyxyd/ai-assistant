import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card.tsx';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs.tsx';
import { useState } from 'react';
import { summaryMap } from '@/shared/mocks.ts';

interface SummaryRow {
  id: string;
  time: string;
  title: string;
  sourceName: string;
  confirmed: number;
  outerLink: string;
  link: string;
  fullText: string;
}

interface SummaryList {
  data: SummaryRow;
  isTimelineMode: boolean;
}

export const SummaryRow = ({ data, isTimelineMode }: SummaryList) => {
  const { time, title, sourceName, confirmed, outerLink, link, fullText } = data;

  return (
    <div className="flex flex-row justify-start items-center">
      {isTimelineMode && <div className="px-2 border-r font-bold text-xl">{time}</div>}
      <div className="flex flex-row justify-between items-center w-full">
        <div className="flex flex-col gap-2 justify-start items-start">
          <div className="font-bold">{isTimelineMode ? title : fullText}</div>
          {isTimelineMode && (
            <div className="flex flex-row items-center justify-center gap-4">
              <a>
                <span className="hover:text-neutral-500 flex flex-row items-center justify-center gap-1 cursor-pointer">
                  Показать в таймлайне
                </span>
              </a>
              <a href={link}>
                <span className="hover:text-neutral-500 flex flex-row items-center justify-center gap-1 cursor-pointer">
                  К публикации
                </span>
              </a>
            </div>
          )}
        </div>
        <div className="flex flex-row gap-4 justify-between items-center">
          <a href={outerLink} className="w-20 text-right">
            <span className="hover:text-neutral-500 flex flex-row items-center justify-center gap-1 cursor-pointer">
              Оригинал
            </span>
          </a>
          <div className="w-20 text-right">[{sourceName}]</div>
          <div className="rounded-full bg-gray-200 w-6 text-center">{confirmed}</div>
        </div>
      </div>
    </div>
  );
};

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
      <CardContent className="flex flex-col gap-4 justify-between min-h-180">
        {summarySlice.map((item) => (
          <SummaryRow key={item.id} data={item} isTimelineMode={activeTab == 'timeline'} />
        ))}

        <button className="w-full h-10 rounded-xl font-semibold cursor-pointer">
          Показать всю историю ({summarySlice.length} факта)
        </button>
      </CardContent>
    </Card>
  );
};
