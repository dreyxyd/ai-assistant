import { EventsGrid } from '@/widgets/EventsGrid/ui/EventsGrid.tsx';

//TODO: вынести логику получения с бекенда избранного в хук
const events = [
  {
    imageUrl: 'https://placehold.co/600x400',
    title: 'title',
    lastUpdateTitle: 'lastUpdateTitle',
    lastUpdateText: 'lastUpdateText',
    firstUpdateTitle: 'firstUpdateTitle',
    firstUpdateText: 'firstUpdateText',
    postsCount: 3,
    sourceCount: 1,
    lastUpdatedAt: 'lastUpdatedAt',
  },
  {
    title: 'title 2',
    badgeText: 'badgeText 2',
    lastUpdateTitle: 'lastUpdateTitle 2',
    lastUpdateText: 'lastUpdateText 2',
    firstUpdateTitle: 'firstUpdateTitle 2',
    firstUpdateText: 'firstUpdateText 2',
    postsCount: 2,
    sourceCount: 2,
    lastUpdatedAt: 'lastUpdatedAt 2',
  },
];
export const Favourites = () => {
  return (
    <div className="flex flex-col justify-center gap-4">
      <div className="font-bold text-xl">Важне для меня</div>
      <EventsGrid events={events} />
    </div>
  );
};
