import { EventItem } from '@/components/custom/EventItem/ui/EventItem.tsx';
import type { Story } from '@/shared/api/types.ts';

interface EventsGridProps {
  events: Story[];
  columns?: 2 | 5;
  showImage?: boolean;
}

const gridColsMap: Record<number, string> = {
  2: 'grid-cols-2',
  5: 'grid-cols-5',
};

const textSizeMap: Record<number, string> = {
  2: 'text-m',
  5: 'text-sm',
};

export const EventsGrid = ({ events, columns = 2, showImage = false }: EventsGridProps) => {
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
        <EventItem key={item.id} event={item} showImage={showImage} />
      ))}
    </div>
  );
};
