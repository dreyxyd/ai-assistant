import { sourceIconsMap, sourceNamesMap } from '../../../../shared/consts.tsx';
import { HoverBadge } from '@/components/custom/HoverBadge/ui/HoverBadge.tsx';

interface Confirmed {
  id: string;
  sourceName: string;
  link: string;
}

interface SummaryRow {
  id: string;
  time: string;
  title: string;
  sourceName: string;
  confirmed: Confirmed[];
  outerLink: string;
  link: string;
  fullText: string;
  additionalSources: SummaryRow[];
}

interface SummaryList {
  data: SummaryRow;
  isLast: boolean;
}

const renderAdditionalSources = (sources: SummaryRow[]) => {
  return sources.map(({ id, time, sourceName, confirmed, outerLink, link }) => (
    <div key={id} className="flex flex-row justify-between items-center w-full mb-1 ">
      <div className="flex flex-row items-center justify-start gap-1">
        <div>{sourceIconsMap[sourceName]}</div>
        <div>{sourceNamesMap[sourceName]}</div>
        <div>{time}</div>
      </div>

      <div className="flex flex-row gap-4 items-center">
        <a href={link} className="w-26 text-right">
          К публикации
        </a>
        <div>{sourceIconsMap[sourceName]}</div>
        <HoverBadge placeholder={confirmed.length}>
          {confirmed.map(({ id, sourceName, link }) => (
            <div key={id} className="flex flex-row items-center justify-between gap-4">
              <div>{sourceIconsMap[sourceName]}</div>
              <a href={link}>К публикации</a>
            </div>
          ))}
        </HoverBadge>
      </div>
    </div>
  ));
};

export const SummaryRow = ({ data, isLast }: SummaryList) => {
  const { time, title, sourceName, confirmed, outerLink, link, fullText, additionalSources } = data;

  return (
    <div className="flex flex-row gap-2">
      <div className="relative self-stretch px-2 font-bold text-l border-r-2">
        {time}
        <span className="absolute top-0 -right-[5px] block h-2 w-2 rounded-full bg-gray-300" />
        {isLast && <span className="absolute bottom-0 -right-[5px] block h-2 w-2 rounded-full bg-gray-300" />}
      </div>

      <div className="w-full">
        <div className="flex flex-row justify-between items-start w-full">
          <div className="flex flex-col gap-1">
            <div className="font-bold">{title}</div>

            <div className="flex flex-row items-center gap-4">
              <a href={link}>Показать в таймлайне</a>
              <a href={link}>К публикации</a>
            </div>
          </div>

          <div className="flex flex-row gap-4 items-center">
            <a href={outerLink} className="w-20 text-right">
              Оригинал
            </a>
            <div>{sourceIconsMap[sourceName]}</div>
            <HoverBadge placeholder={confirmed.length}>
              {confirmed.map(({ id, sourceName, link }) => (
                <div key={id} className="flex flex-row items-center justify-between gap-4">
                  <div>{sourceIconsMap[sourceName]}</div>
                  <a href={link}>К публикации</a>
                </div>
              ))}
            </HoverBadge>
          </div>
        </div>
        {additionalSources?.length > 0 && renderAdditionalSources(additionalSources)}
      </div>
    </div>
  );
};
