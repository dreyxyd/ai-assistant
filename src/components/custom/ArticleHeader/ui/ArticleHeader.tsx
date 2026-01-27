import { FileSpreadsheet, Search, Star } from 'lucide-react';

export interface HeaderData {
  isFavourite?: boolean;
  title: string;
  lastUpdatedAt: string;
  postsCount: number;
  sourcesCount: number;
}
interface ArticleHeader {
  data: HeaderData;
}
export const ArticleHeader = ({ data }: ArticleHeader) => {
  const { isFavourite, title, lastUpdatedAt, postsCount, sourcesCount } = data;
  return (
    <div className="flex flex-col justify-center gap-2">
      <div className="flex flex-row gap-2">
        {isFavourite && <Star />} <span className="text-xl font-bold">{title}</span>
      </div>
      <div className="flex flex-row gap-2 text-neutral-400">
        <div>Обновлено {lastUpdatedAt} назад</div>
        <div className="flex flex-row gap-2 items-center">
          <FileSpreadsheet size={16} /> {postsCount}
        </div>
        <div className="flex flex-row gap-2 items-center">
          <Search size={16} />
          {sourcesCount} Источников
        </div>
      </div>
    </div>
  );
};
