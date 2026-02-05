import { useState } from 'react';
import { FiltersBar } from '@/widgets/FiltersBar/ui/FiltersBar.tsx';
import { StreamEventsGrid } from '@/components/custom/StreamEventsGrid/ui/StreamEventsGrid.tsx';
import { streamEvents } from '@/shared/mocks.ts';

//TODO: разобраться с определением периода

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
