import { Favourites } from '@/components/custom/FavouritesGrid/ui/Favourites.tsx';
import { OtherEventsGrid } from '@/components/custom/OtherEventsGrid/ui/OtherEventsGrid.tsx';

export const PictureDayPage = () => {
  return (
    <div className="flex flex-col justify-center gap-4">
      <div>
        <div className="font-bold text-3xl">Картина дня</div>
        <div className="text-neutral-400">Сюжеты за последние 24 часа</div>
      </div>
      <Favourites />
      <OtherEventsGrid />
    </div>
  );
};
