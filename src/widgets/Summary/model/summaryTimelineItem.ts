import type { SourceIconKey } from '@/shared/lib/sourceIconKey.ts';

export interface SummaryTimelineConfirmed {
  id: string;
  sourceName: SourceIconKey;
  link: string;
}

export interface SummaryTimelineItem {
  id: string;
  time: string;
  title: string;
  sourceName: SourceIconKey;
  confirmed: SummaryTimelineConfirmed[];
  outerLink: string;
  link: string;
  fullText: string;
  additionalSources: SummaryTimelineItem[];
}
