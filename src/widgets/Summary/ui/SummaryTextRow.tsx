import { sourceIconsMap, sourceNamesMap } from '../../../../shared/consts.tsx';
import { HoverBadge } from '@/components/custom/HoverBadge/ui/HoverBadge.tsx';
import { SquareArrowOutUpRight } from 'lucide-react';
import type { SummaryTimelineItem } from '@/widgets/Summary/model/summaryTimelineItem.ts';

interface SummaryList {
  data: SummaryTimelineItem;
}

const renderSourceBadges = (sources: SummaryTimelineItem[]) => {
  const firstTwo = sources.slice(0, 2);
  const rest = sources.slice(2);
  return (
    <div className="flex flex-row items-center justify-start gap-1">
      {firstTwo.map(({ id, time, sourceName, link }) => (
        <a
          key={id}
          href={link}
          className="rounded-full bg-gray-200 flex flex-row items-center justify-start gap-1 py-0.5 px-1 text-xs"
        >
          <div>{sourceIconsMap[sourceName]}</div>
          <div>{sourceNamesMap[sourceName]}</div>
          <div>{time}</div>
          <SquareArrowOutUpRight size={12} className="mt-0.5" />
        </a>
      ))}
      {rest.length > 0 && (
        <HoverBadge placeholder={`+${rest.length}`}>
          {rest.map(({ id, sourceName, link, time }) => (
            <a href={link} key={id} className="flex flex-row items-center justify-between gap-1 mb-1 last:mb-0">
              <div>{sourceIconsMap[sourceName]}</div>
              <div>{sourceNamesMap[sourceName]}</div>
              <div>{time}</div>
              <SquareArrowOutUpRight size={12} className="mt-0.5" />
            </a>
          ))}
        </HoverBadge>
      )}
    </div>
  );
};

export const SummaryTextRow = ({ data }: SummaryList) => {
  const { fullText, additionalSources } = data;

  return (
    <div className="flex flex-col w-full">
      <div className="w-full font-semibold">{fullText}</div>
      {additionalSources?.length > 0 && renderSourceBadges(additionalSources)}
    </div>
  );
};
