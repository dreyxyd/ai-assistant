import type { StoriesResponse } from './types.ts';

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

export async function setStoryStarred(id: number): Promise<void> {
  const base = getApiBaseUrl();
  const res = await fetch(`${base}/api/stories/${id}/star`, {
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
