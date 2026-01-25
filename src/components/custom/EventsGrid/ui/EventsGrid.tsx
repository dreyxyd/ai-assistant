import { EventItem } from '@/components/custom/EventItem/ui/EventItem.tsx';

interface FavouritesGridProps {
  events: EventItem[];
  columns?: 2 | 5;
  showImage?: boolean;
}
//TODO: реализовать логику удаления из избранного при клике на Star в EventItem

//TODO этот компонент делает то же самое что и StreamEventsGrid

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
    <div
      className={`
        flex flex-col justify-center gap-2
        md:grid md:gap-2
        ${gridColsMap[columns]}
        ${textSizeMap[columns]}
      `}
    >
      {events.map((item) => (
        <EventItem key={item.title} event={item} showImage={showImage} />
      ))}
    </div>
  );
};
