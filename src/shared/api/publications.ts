import type { StreamEvent } from '@/components/custom/StreamEventItem/ui/StreamEventItem.tsx';

const getApiBaseUrl = () => {
  const url = import.meta.env.VITE_API_URL;
  if (!url) throw new Error('VITE_API_URL is not set');
  return url.replace(/\/$/, '');
};

export type PublicationSource = {
  id: number;
  name: string;
  logo_url: string | null;
};

export type Publication = {
  id: number;
  source: PublicationSource;
  published_at: string;
  title: string;
  snippet: string;
  original_url: string;
  thumbnail_url: string | null;
  story_id: number | null;
  story_status: string;
};

export type PublicationsResponse = {
  data: Publication[];
  meta?: {
    current_page: number;
    per_page: number;
    total: number;
    last_page: number;
  };
};

export type FetchPublicationsParams = {
  type?: 'all' | 'smi' | 'ia' | 'press';
  source_id?: string;
  search?: string;
  page?: number;
  per_page?: number;
};

export async function fetchPublications(params: FetchPublicationsParams = {}): Promise<PublicationsResponse> {
  const base = getApiBaseUrl();
  const sp = new URLSearchParams();
  if (params.type && params.type !== 'all') {
    sp.set('type', params.type);
  }
  if (params.source_id) {
    sp.set('source_id', params.source_id);
  }
  if (params.search) {
    sp.set('search', params.search);
  }
  if (params.page != null) {
    sp.set('page', String(params.page));
  }
  if (params.per_page != null) {
    sp.set('per_page', String(params.per_page));
  }
  const qs = sp.toString();
  const res = await fetch(`${base}/api/publications${qs ? `?${qs}` : ''}`);
  if (!res.ok) {
    throw new Error(`Failed to fetch publications: ${res.status}`);
  }
  return res.json() as Promise<PublicationsResponse>;
}

export function mapPublicationToStreamEvent(p: Publication): StreamEvent {
  const published = new Date(p.published_at);
  const time = published.toLocaleString('ru-RU', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  });

  return {
    id: String(p.id),
    sourceReal: {
      id: String(p.source.id),
      name: p.source.name,
      logo_url: p.source.logo_url ?? '',
    },
    published_at: p.published_at,
    title: p.title,
    snippet: p.snippet,
    original_url: p.original_url,
    thumbnail_url: p.thumbnail_url ?? '',
    story_id: p.story_id != null ? String(p.story_id) : '',
    story_status: p.story_status,
    source: p.source.name,
    time,
    subtitle: p.snippet,
    originalLink: p.original_url,
    localLink: '',
    imageUrl: p.thumbnail_url ?? undefined,
  };
}
