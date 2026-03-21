/** GET /api/stories/{id} — схема StoryDetail из AI_Editorial.yaml */

export interface StoryDetailSourceRef {
  source_id: string | number;
  name: string;
  logo_url: string | null;
  published_at: string;
  publication_id: string | number;
  anchor_id: string;
  original_url: string;
}

export interface StoryDetailFact {
  id: string | number;
  timestamp: string;
  text: string;
  key_source: StoryDetailSourceRef;
  supporting_sources: StoryDetailSourceRef[];
  supporting_count: number;
  evidence_snippet: string | null;
}

export interface StoryDetailPublicationSource {
  id: string | number;
  name: string;
  logo_url: string | null;
}

export interface StoryDetailPublication {
  publication_id: string | number;
  anchor_id: string;
  published_at: string;
  source: StoryDetailPublicationSource;
  title: string;
  description: string;
  original_url: string;
  is_mine: boolean;
}

export interface StoryDetail {
  id: string | number;
  ai_title: string;
  created_at: string;
  last_significant_update_at: string;
  publications_count: number;
  sources_count: number;
  is_starred_by_me: boolean;
  user_last_seen_at: string | null;
  whats_new: StoryDetailFact[];
  facts: StoryDetailFact[];
  facts_total: number;
  publications: StoryDetailPublication[];
}
