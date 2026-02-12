import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card.tsx';
import { ArrowRight, SquareArrowOutUpRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '../../../../../shared/consts.tsx';

const real = {
  id: 'pub_891',
  source: {
    id: 'string',
    name: 'ТАСС',
    logo_url: 'string',
  },
  published_at: '2026-02-09T15:30:00Z',
  title: 'ЦБ повысил ключевую ставку до 18%',
  snippet: 'Решение принято на фоне ускорения инфляции...',
  original_url: 'http://example.com',
  thumbnail_url: 'http://example.com',
  story_id: 'story_123',
  story_status: 'ready',
};

interface StreamSource {
  id: string;
  name: string;
  logo_url: string;
}

export interface StreamEvent {
  id: string;
  sourceReal: StreamSource; //TODO: переименовать в source
  published_at: string;
  title: string;
  snippet: string;
  original_url: string;
  thumbnail_url: string;
  story_id: string;
  story_status: string;

  source: string;
  time: string;
  subtitle?: string;
  originalLink: string;
  localLink: string;
  imageUrl?: string;
}
interface StreamEventItemProps {
  streamEvent: StreamEvent;
}
export const StreamEventItem = ({ streamEvent }: StreamEventItemProps) => {
  const navigate = useNavigate();
  const { source, time, title, subtitle, originalLink, imageUrl } = streamEvent;

  const goToArticle = () => {
    navigate(ROUTES.article(streamEvent.id));
  };

  return (
    <Card className="flex cursor-pointer flex-col justify-between" onClick={goToArticle}>
      <CardHeader>
        <CardTitle className="flex flex-row items-center justify-between">
          <div className="flex flex-row gap-2 items-center">
            <div>{source}</div>
            <div>{time}</div>
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent className="flex flex-row justify-between items-center">
        <div className="flex flex-col justify-between gap-2 h-full">
          <div className="font-bold">{title}</div>
          {subtitle && <div>{subtitle}</div>}
          <div className="flex flex-row items-center gap-4 text-black" onClick={(e) => e.stopPropagation()}>
            <a target="_blank" href={originalLink} className="flex flex-row items-center justify-center">
              <span className="hover:text-neutral-500 flex flex-row items-center justify-center gap-1">
                <SquareArrowOutUpRight className="mt-0.5" size={14} /> Оригинал
              </span>
            </a>
            <button
              type="button"
              onClick={(e) => {
                e.preventDefault();
                goToArticle();
              }}
              className="flex flex-row items-center justify-center bg-transparent p-0 text-inherit hover:text-neutral-500"
            >
              <ArrowRight size={16} /> В сюжет
            </button>
          </div>
        </div>
        {imageUrl && (
          <div className="hidden md:block w-full max-w-[120px]">
            <img alt={title} src={imageUrl} className="rounded-xl" />
          </div>
        )}
      </CardContent>
    </Card>
  );
};
