import { EventsGrid } from '@/components/custom/EventsGrid/ui/EventsGrid.tsx';

//TODO: вынести логику получения с бекенда избранного в хук
const events = [
  {
    id: 1,
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
    id: 2,
    imageUrl: 'https://placehold.co/600x400',
    title: 'title2',
    lastUpdateTitle: 'lastUpdateTitle',
    lastUpdateText: 'lastUpdateText',
    firstUpdateTitle: 'firstUpdateTitle',
    firstUpdateText: 'firstUpdateText',
    postsCount: 3,
    sourceCount: 1,
    lastUpdatedAt: 'lastUpdatedAt',
  },
  {
    id: 3,
    imageUrl: 'https://placehold.co/600x400',
    title: 'title1',
    lastUpdateTitle: 'lastUpdateTitle',
    lastUpdateText: 'lastUpdateText',
    firstUpdateTitle: 'firstUpdateTitle',
    firstUpdateText: 'firstUpdateText',
    postsCount: 3,
    sourceCount: 1,
    lastUpdatedAt: 'lastUpdatedAt',
  },
  {
    id: 4,
    imageUrl: 'https://placehold.co/600x400',
    title: 'title3',
    lastUpdateTitle: 'lastUpdateTitle',
    lastUpdateText: 'lastUpdateText',
    firstUpdateTitle: 'firstUpdateTitle',
    firstUpdateText: 'firstUpdateText',
    postsCount: 3,
    sourceCount: 1,
    lastUpdatedAt: 'lastUpdatedAt',
  },
  {
    id: 5,
    imageUrl: 'https://placehold.co/600x400',
    title: 'title4',
    lastUpdateTitle: 'lastUpdateTitle',
    lastUpdateText: 'lastUpdateText',
    firstUpdateTitle: 'firstUpdateTitle',
    firstUpdateText: 'firstUpdateText',
    postsCount: 3,
    sourceCount: 1,
    lastUpdatedAt: 'lastUpdatedAt',
  },
  {
    id: 6,
    imageUrl: 'https://placehold.co/600x400',
    title: 'title5',
    lastUpdateTitle: 'lastUpdateTitle',
    lastUpdateText: 'lastUpdateText',
    firstUpdateTitle: 'firstUpdateTitle',
    firstUpdateText: 'firstUpdateText',
    postsCount: 3,
    sourceCount: 1,
    lastUpdatedAt: 'lastUpdatedAt',
  },
  {
    id: 7,
    imageUrl: 'https://placehold.co/600x400',
    title: 'title6',
    lastUpdateTitle: 'lastUpdateTitle',
    lastUpdateText: 'lastUpdateText',
    firstUpdateTitle: 'firstUpdateTitle',
    firstUpdateText: 'firstUpdateText',
    postsCount: 3,
    sourceCount: 1,
    lastUpdatedAt: 'lastUpdatedAt',
  },
];

export const OtherEventsGrid = () => {
  return (
    <div className="flex flex-col justify-center gap-4">
      <div className="font-bold text-xl">Остальные сюжеты</div>
      <EventsGrid events={events} columns={5} showImage={true} />
    </div>
  );
};
