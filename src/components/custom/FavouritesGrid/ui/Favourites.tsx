import { EventsGrid } from '@/components/custom/EventsGrid/ui/EventsGrid.tsx';
import type { Story } from '@/shared/api/types.ts';

interface FavouritesProps {
  stories: Story[];
}

export const Favourites = ({ stories }: FavouritesProps) => {
  return (
    <div className="flex flex-col justify-center gap-4">
      <div className="font-bold text-xl">Важное для меня</div>
      <EventsGrid events={stories} />
    </div>
  );
};
