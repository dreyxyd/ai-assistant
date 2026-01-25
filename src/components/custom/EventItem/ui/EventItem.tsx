import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card.tsx';
import { Star } from 'lucide-react';

export interface EventItem {
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

interface EventItemProps {
  event: EventItem;
  showImage?: boolean;
}

export const EventItem = ({ event, showImage = false }: EventItemProps) => {
  return (
    <Card key={event.title}>
      <CardHeader>
        {event.imageUrl && showImage && (
          <div className="w-full">
            <img alt="title image" src={event.imageUrl} className="rounded-xl" />
          </div>
        )}
        <CardTitle className="flex flex-row items-center justify-between">
          <div className="flex flex-row items-center justify-center gap-2">
            <div>{event.title}</div>
            {event.badgeText && <div>{event.badgeText}</div>}
          </div>
          <div>
            <Star />
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        <div>
          <div className="font-bold">{event.lastUpdateTitle}</div>
          <div>{event.lastUpdateText}</div>
        </div>
        <div>
          <div className="font-bold">{event.firstUpdateTitle}</div>
          <div>{event.firstUpdateText}</div>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <div>{event.postsCount} публикаций</div>
          <div>{event.sourceCount} источников</div>
          <div className="whitespace-nowrap">Обновлено {event.lastUpdatedAt} назад</div>
        </div>
      </CardContent>
    </Card>
  );
};
