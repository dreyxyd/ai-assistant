import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card.tsx';
import { Star } from 'lucide-react';

interface FavouriteItem {
  imageUrl?: string;
  title: string;
  badgeText?: string;
  lastUpdateTitle: string;
  lastUpdateText: string;
  firstUpdateTitle: string;
  firstUpdateText: string;
  postsCount: number;
  sourceCount: number;
  lastUpdatedAt: string;
}
interface FavouritesGridProps {
  events: FavouriteItem[];
  columns?: 2 | 5;
  showImage?: boolean;
}
//TODO: реализовать логику удаления из избранного при клике на Star

const gridColsMap: Record<number, string> = {
  2: 'grid-cols-2',
  5: 'grid-cols-5',
};

const textSizeMap: Record<number, string> = {
  2: 'text-m',
  5: 'text-sm',
};
export const EventsGrid = ({ events, columns = 2, showImage = false }: FavouritesGridProps) => {
  return (
    <div className={`grid gap-2 ${gridColsMap[columns]} ${textSizeMap[columns]}`}>
      {events.map((item) => (
        <Card key={item.title}>
          <CardHeader>
            {item.imageUrl && showImage && (
              <div className="w-full">
                <img alt="title image" src={item.imageUrl} />
              </div>
            )}
            <CardTitle className="flex flex-row items-center justify-between">
              <div className="flex flex-row items-center justify-center gap-2">
                <div>{item.title}</div>
                {item.badgeText && <div>{item.badgeText}</div>}
              </div>
              <div>
                <Star />
              </div>
            </CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col gap-4">
            <div>
              <div className="font-bold">{item.lastUpdateTitle}</div>
              <div>{item.lastUpdateText}</div>
            </div>
            <div>
              <div className="font-bold">{item.firstUpdateTitle}</div>
              <div>{item.firstUpdateText}</div>
            </div>
            <div className="flex flex-wrap items-center gap-2">
              <div>{item.postsCount} публикаций</div>
              <div>{item.sourceCount} источников</div>
              <div className="whitespace-nowrap">Обновлено {item.lastUpdatedAt} назад</div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};
