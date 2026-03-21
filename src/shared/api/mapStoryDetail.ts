import { formatTime, formatRelativeTimeRu } from '@/lib/formatters.ts';
import type { HeaderData } from '@/components/custom/ArticleHeader/ui/ArticleHeader.tsx';
import type { WhatsNewItem } from '@/components/custom/WhatsNew/ui/WhatsNew.tsx';
import type { AllSourcesItem } from '@/components/custom/AllSourcesPostsList/ui/AllSourcesPostsList.tsx';
import type { SummaryTimelineItem } from '@/widgets/Summary/model/summaryTimelineItem.ts';
import { getSourceIconKey } from '@/shared/lib/sourceIconKey.ts';
import type { StoryDetail, StoryDetailFact } from './storyDetailTypes.ts';

function factToTimelineItem(fact: StoryDetailFact): SummaryTimelineItem {
  return {
    id: String(fact.id),
    time: formatTime(fact.timestamp),
    title: fact.text,
    sourceName: getSourceIconKey(fact.key_source.name),
    confirmed: fact.supporting_sources.map((s, i) => ({
      id: String(s.publication_id ?? `s-${i}`),
      sourceName: getSourceIconKey(s.name),
      link: s.original_url,
    })),
    outerLink: fact.key_source.original_url,
    link: fact.key_source.original_url,
    fullText: fact.evidence_snippet ?? fact.text,
    additionalSources: [],
  };
}

export function mapStoryDetailToHeader(detail: StoryDetail): HeaderData {
  return {
    storyId: detail.id,
    is_starred_by_me: detail.is_starred_by_me,
    ai_title: detail.ai_title,
    last_significant_update_at: formatRelativeTimeRu(detail.last_significant_update_at),
    publications_count: detail.publications_count,
    sources_count: detail.sources_count,
  };
}

export function mapStoryDetailToWhatsNew(detail: StoryDetail): WhatsNewItem[] {
  return detail.whats_new.map((f) => ({
    id: String(f.id),
    time: f.timestamp,
    title: f.text,
    confirmed: f.supporting_count,
  }));
}

export function mapStoryDetailToPublications(detail: StoryDetail): AllSourcesItem[] {
  return detail.publications.map((p, i) => ({
    id: String(p.publication_id ?? i),
    time: p.published_at,
    sourceName: getSourceIconKey(p.source.name),
    title: p.title || p.description,
    outerLink: p.original_url,
  }));
}

export function mapStoryDetailToFactsTimeline(detail: StoryDetail): SummaryTimelineItem[] {
  return detail.facts.map(factToTimelineItem);
}
