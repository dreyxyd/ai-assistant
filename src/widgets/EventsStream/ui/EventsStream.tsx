import { useMemo, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { FiltersBar } from '@/widgets/FiltersBar/ui/FiltersBar.tsx';
import type { StreamFiltersState } from '@/widgets/FiltersBar/ui/FiltersBar.tsx';
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

function uniqueSourcesFromPublications(
  publications: { source: { id: number; name: string } }[],
): { id: number; name: string }[] {
  const byId = new Map<number, { id: number; name: string }>();
  for (const p of publications) {
    const s = p.source;
    if (!byId.has(s.id)) {
      byId.set(s.id, { id: s.id, name: s.name });
    }
  }
  return [...byId.values()].sort((a, b) => a.name.localeCompare(b.name, 'ru'));
}

export const EventsStream = () => {
  const [filters, setFilters] = useState<StreamFiltersState>({
    type: '',
    period: '',
    source: [],
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

  const sourceOptions = useMemo(() => uniqueSourcesFromPublications(data?.data ?? []), [data]);

  const streamEvents = useMemo(() => {
    const list = data?.data ?? [];
    return list
      .filter((p) => publicationInPeriod(p.published_at, filters.period))
      .filter((p) => (filters.source.length === 0 ? true : filters.source.includes(p.source.id)))
      .map(mapPublicationToStreamEvent);
  }, [data, filters.period, filters.source]);

  return (
    <div className="flex flex-col justify-center gap-4">
      <FiltersBar filters={filters} setFilters={setFilters} sourceOptions={sourceOptions} />

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
