import { EventsGrid } from '@/components/custom/EventsGrid/ui/EventsGrid.tsx';
import { restEvents } from '@/shared/mocks.ts';

//TODO: вынести логику получения с бекенда избранного в хук

export const RestEventsGrid = () => {
  return (
    <div className="flex flex-col justify-center gap-4">
      <div className="font-bold text-xl">Остальные сюжеты</div>
      <EventsGrid events={restEvents} columns={5} showImage={true} />
    </div>
  );
};
