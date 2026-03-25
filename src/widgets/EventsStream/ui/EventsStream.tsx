import { useMemo, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { FiltersBar } from '@/widgets/FiltersBar/ui/FiltersBar.tsx';
import { StreamEventsGrid } from '@/components/custom/StreamEventsGrid/ui/StreamEventsGrid.tsx';
import { fetchPublications, mapPublicationToStreamEvent } from '@/shared/api/publications.ts';

//TODO: разобраться с определением периода (сейчас только клиентский фильтр по published_at)

const TYPE_FILTER_TO_API: Record<string, 'smi' | 'ia' | 'press'> = {
  СМИ: 'smi',
  ИА: 'ia',
  'Пресс-Службы': 'press',
};

function publicationInPeriod(publishedAt: string, period: string): boolean {
  if (!period) return true;
  const t = new Date(publishedAt).getTime();
  if (Number.isNaN(t)) return true;
  const delta = Date.now() - t;
  if (period === 'Час') return delta <= 60 * 60 * 1000;
  if (period === '24 Часа') return delta <= 24 * 60 * 60 * 1000;
  return true;
}

export const EventsStream = () => {
  const [filters, setFilters] = useState({
    type: '',
    period: '',
    source: [] as string[],
    query: '',
  });

  const apiType = filters.type ? (TYPE_FILTER_TO_API[filters.type] ?? 'all') : 'all';
  const search = filters.query.trim() || undefined;

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ['publications', apiType, search ?? ''],
    queryFn: () =>
      fetchPublications({
        type: apiType,
        search,
        page: 1,
        per_page: 40,
      }),
  });

  const streamEvents = useMemo(() => {
    const list = data?.data ?? [];
    return list
      .filter((p) => publicationInPeriod(p.published_at, filters.period))
      .map(mapPublicationToStreamEvent)
      .filter((e) => (filters.source.length === 0 ? true : filters.source.includes(e.source)));
  }, [data, filters.period, filters.source]);

  return (
    <div className="flex flex-col justify-center gap-4">
      <FiltersBar filters={filters} setFilters={setFilters} />

      {isLoading && <div className="text-muted-foreground">Загрузка...</div>}

      {isError && (
        <div className="text-destructive">
          {error instanceof Error ? error.message : 'Не удалось загрузить публикации'}
        </div>
      )}

      {!isLoading && !isError && <StreamEventsGrid streamEvents={streamEvents} />}
    </div>
  );
};
