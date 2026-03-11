export interface StorySource {
  name: string;
  logo_url: string | null;
}

export interface StoryPublication {
  published_at: string;
  source: StorySource;
  text: string;
}

export interface Story {
  id: number;
  ai_title: string;
  first_publication: StoryPublication;
  last_significant_update: StoryPublication;
  publications_count: number;
  sources_count: number;
  updated_ago: string;
  is_starred_by_me: boolean;
  is_unseen_by_me: boolean;
  image_url?: string | null;
}

export interface StoriesResponse {
  data: Story[];
}
