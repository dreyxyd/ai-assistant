import { useState } from 'react';
import { FiltersBar } from '@/widgets/FiltersBar/ui/FiltersBar.tsx';
import { StreamEventsGrid } from '@/components/custom/StreamEventsGrid/ui/StreamEventsGrid.tsx';

//TODO: разобраться с определением периода
const streamEvents = [
  {
    source: 'string',
    time: '2026-01-21 10:00',
    title: 'Событие 1',

    originalLink: 'string',
    localLink: 'string',
    imageUrl: 'https://placehold.co/600x400',
    type: 'type1',
    period: '24 часа',
  },
  {
    source: 'string2',
    time: '2026-01-20 12:00',
    title: 'Событие 2',
    imageUrl: 'https://placehold.co/600x400',
    subtitle: 'Описание 2',
    originalLink: 'string',
    localLink: 'string',

    type: 'type2',
    period: 'Неделя',
  },
];

export const EventsStream = () => {
  const [filters, setFilters] = useState({
    type: '',
    period: '',
    source: [] as string[],
    query: '',
  });

  const filteredEvents = streamEvents.filter((event) => {
    const matchesType = filters.type ? event.type === filters.type : true;
    const matchesPeriod = filters.period ? event.period === filters.period : true;

    const matchesSource = filters.source.length > 0 ? filters.source.some((src) => event.source.includes(src)) : true;

    const matchesQuery = filters.query ? event.title.toLowerCase().includes(filters.query.toLowerCase()) : true;

    return matchesType && matchesPeriod && matchesSource && matchesQuery;
  });

  return (
    <div className="flex flex-col justify-center gap-4">
      <FiltersBar filters={filters} setFilters={setFilters} />
      <StreamEventsGrid streamEvents={filteredEvents} />
    </div>
  );
};
