import { useQuery } from '@tanstack/react-query';
import { Favourites } from '@/components/custom/FavouritesGrid/ui/Favourites.tsx';
import { RestEventsGrid } from '@/components/custom/RestEventsGrid/ui/RestEventsGrid.tsx';
import { fetchStories } from '@/shared/api/stories.ts';

export const PictureDayPage = () => {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ['stories'],
    queryFn: fetchStories,
  });

  const favouriteStories = data?.data?.filter((s) => s.is_starred_by_me) ?? [];
  const restStories = data?.data?.filter((s) => !s.is_starred_by_me) ?? [];

  return (
    <div className="flex flex-col justify-center gap-4">
      <div>
        <div className="font-bold text-3xl">Картина дня</div>
        <div className="text-neutral-400">Сюжеты за последние 24 часа</div>
      </div>

      {isLoading && (
        <div className="text-muted-foreground">Загрузка...</div>
      )}

      {isError && (
        <div className="text-destructive">
          Ошибка: {error instanceof Error ? error.message : 'Не удалось загрузить сюжеты'}
        </div>
      )}

      {data && (
        <>
          {favouriteStories.length > 0 && <Favourites stories={favouriteStories} />}
          <RestEventsGrid stories={restStories} />
        </>
      )}
    </div>
  );
};
