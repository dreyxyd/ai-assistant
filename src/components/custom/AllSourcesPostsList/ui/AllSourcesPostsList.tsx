import { formatTime } from '@/lib/formatters.ts';
import { useState } from 'react';

export interface AllSourcesItem {
  id: number;
  time: string;
  sourceName: string;
  title: string;
  outerLink: string;
}
interface AllSourcesPostsList {
  data: AllSourcesItem[];
}
export const AllSourcesPostsList = ({ data }: AllSourcesPostsList) => {
  const [copiedId, setCopiedId] = useState<number | null>(null);

  const handleCopy = async (id: number, link: string) => {
    try {
      await navigator.clipboard.writeText(link);
      setCopiedId(id);

      setTimeout(() => {
        setCopiedId(null);
      }, 2000);
    } catch (error) {
      console.error('Failed to copy:', error);
    }
  };
  return (
    <div className="w-full">
      <div className="text-xl font-bold pl-14">Все источники ({data.length})</div>
      {data.map((item) => (
        <div className="flex flex-row gap-6 items-center justify-start">
          <div>{formatTime(item.time)}</div>
          <div className="border-b border-gray-200 flex flex-row items-center justify-between w-full">
            <div className="flex flex-row justify-center items-center">
              <div>[{item.sourceName}]</div>
              <div>{item.title}</div>
            </div>
            <div className="flex flex-row justify-center items-center">
              <a href={item.outerLink} target="_blank">
                <span className="hover:text-neutral-500 flex flex-row items-center justify-center gap-1 cursor-pointer">
                  Оригинал
                </span>
              </a>

              <button
                onClick={() => handleCopy(item.id, item.outerLink)}
                className="hover:underline w-42 text-right cursor-pointer"
              >
                {copiedId === item.id ? 'Скопировано!' : 'Копировать ссылку'}
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
