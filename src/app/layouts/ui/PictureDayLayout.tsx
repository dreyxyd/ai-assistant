import { Favourites } from '@/components/Favourites/ui/Favourites.tsx';
import { OtherEvents } from '@/components/custom/OtherEvents/ui/OrherEvents.tsx';

export const PictureDayLayout = () => {
  return (
    <div className="flex flex-col justify-center gap-4">
      <div>
        <div className="font-bold text-3xl">Картина дня</div>
        <div className="text-neutral-400">Сюжеты за последние 24 часа</div>
      </div>
      <Favourites />
      <OtherEvents />
    </div>
  );
};
