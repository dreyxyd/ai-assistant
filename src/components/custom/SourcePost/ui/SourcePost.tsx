import { ArrowRight, ArrowUpRight } from 'lucide-react';

interface SourcePost {
  id: string;
  published_at: string;
  title: string;
  snippet: string;
  original_url: string;
  thumbnail_url: string;
}
export const SourcePost = ({ data }: { data: SourcePost }) => {
  const { id, published_at, title, snippet, original_url, thumbnail_url } = data;
  return (
    <div key={id} className="w-full rounded-xl p-2 flex flex-col items-start justify-center gap-1 shadow-sm border">
      <div>{published_at}</div>
      <div className="fonst-semibold text-xl">{title}</div>
      <div>{snippet}</div>
      <div className="flex flex-row items-center justify-start gap-1">
        <a
          href={original_url}
          className="flex flex-row items-center justify-center gap-1 bg-neutral-200 rounded-md p-1"
        >
          <ArrowUpRight />
          Оригинал
        </a>
        <a
          href={thumbnail_url}
          className="flex flex-row items-center justify-center gap-1 bg-neutral-200 rounded-md p-1"
        >
          <ArrowRight /> В сюжет
        </a>
      </div>
    </div>
  );
};
