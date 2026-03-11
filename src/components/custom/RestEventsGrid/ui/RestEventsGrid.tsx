import { EventsGrid } from '@/components/custom/EventsGrid/ui/EventsGrid.tsx';
import type { Story } from '@/shared/api/types.ts';

interface RestEventsGridProps {
  stories: Story[];
}

export const RestEventsGrid = ({ stories }: RestEventsGridProps) => {
  return (
    <div className="flex flex-col justify-center gap-4">
      <div className="font-bold text-xl">Остальные сюжеты</div>
      <EventsGrid events={stories} columns={5} showImage />
    </div>
  );
};
