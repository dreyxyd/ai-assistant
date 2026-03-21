import type { StoriesResponse } from './types.ts';
import type { StoryDetail } from './storyDetailTypes.ts';

const getApiBaseUrl = () => {
  const url = import.meta.env.VITE_API_URL;
  if (!url) throw new Error('VITE_API_URL is not set');
  return url.replace(/\/$/, '');
};

export async function fetchStories(): Promise<StoriesResponse> {
  const base = getApiBaseUrl();
  const res = await fetch(`${base}/api/stories`);
  if (!res.ok) {
    throw new Error(`Failed to fetch stories: ${res.status}`);
  }
  return res.json() as Promise<StoriesResponse>;
}

export async function fetchStoryById(id: string): Promise<StoryDetail> {
  const base = getApiBaseUrl();
  const res = await fetch(`${base}/api/stories/${encodeURIComponent(id)}`);
  if (res.status === 404) {
    throw new Error('NOT_FOUND');
  }
  if (!res.ok) {
    throw new Error(`Failed to fetch story: ${res.status}`);
  }
  const json: unknown = await res.json();
  if (json && typeof json === 'object' && 'data' in json) {
    const wrapped = json as { data: StoryDetail };
    return wrapped.data;
  }
  return json as StoryDetail;
}

export async function setStoryStarred(id: string | number): Promise<void> {
  const base = getApiBaseUrl();
  const pathId = encodeURIComponent(String(id));
  const res = await fetch(`${base}/api/stories/${pathId}/star`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
  });
  if (!res.ok) {
    throw new Error(`Failed to update star: ${res.status}`);
  }
}

export async function setStorySeen(id: number): Promise<void> {
  const base = getApiBaseUrl();
  const res = await fetch(`${base}/api/stories/${id}/seen`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
  });
  if (!res.ok) {
    throw new Error(`Failed to update seen: ${res.status}`);
  }
}
