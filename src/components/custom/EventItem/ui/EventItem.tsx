import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card.tsx';
import { Star } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '../../../../../shared/consts.tsx';

const real = {
  id: 'story_123',
  ai_title: 'ЦБ повысил ключевую ставку до 18%',
  first_publication: {
    published_at: '2019-08-24T14:15:22Z',
    source: {
      name: 'РБК',
      logo_url: 'string',
    },
    text: 'Источники сообщили о возможном повышении ставки на заседании совета директоров.',
  },
  last_significant_update: {
    published_at: '2019-08-24T14:15:22Z',
    source: {
      name: 'ТАСС',
      logo_url: 'string',
    },
    text: 'На пресс-конференции в ЦБ заявили, что решение связано с ускорением инфляции.',
  },
  publications_count: 12,
  sources_count: 8,
  updated_ago: '2 мин назад',
  is_starred_by_me: true,
  is_unseen_by_me: true,
};

interface Source {
  name: string;
  logo_url: string;
}

interface Publication {
  published_at: string;
  source: Source;
  text: string;
}

export interface EventItem {
  id: string;
  ai_title: string;
  first_publication: Publication;
  last_significant_update: Publication;
  publications_count: number;
  sources_count: number;
  updated_ago: string;
  is_starred_by_me: boolean;
  is_unseen_by_me: boolean;

  imageUrl?: string;
  badgeText?: string;

  title: string;
  firstUpdateTitle: string;
  firstUpdateText: string;
  lastUpdateTitle: string;
  lastUpdateText: string;
  postsCount: number;
  sourceCount: number;
  lastUpdatedAt: string;
}

interface EventItemProps {
  event: EventItem;
  showImage?: boolean;
}

export const EventItem = ({ event, showImage = false }: EventItemProps) => {
  const navigate = useNavigate();

  const goToArticle = () => {
    navigate(ROUTES.article(event.id));
  };

  //TODO: кликабельный star /api/stories/{id}/star
  return (
    <Card key={event.id}>
      <CardHeader>
        {event.imageUrl && showImage && (
          <div className="w-full">
            <img alt="title image" src={event.imageUrl} className="rounded-xl cursor-pointer" onClick={goToArticle} />
          </div>
        )}
        <CardTitle className="flex flex-row items-center justify-between">
          <div className="flex flex-row items-center justify-center gap-2">
            <div>{event.title}</div>
            {event.badgeText && <div>{event.badgeText}</div>}
          </div>
          <button className="cursor-pointer">
            <Star />
          </button>
        </CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        <div>
          <div className="font-bold">{event.lastUpdateTitle}</div>
          <div>{event.lastUpdateText}</div>
        </div>
        <div>
          <div className="font-bold">{event.firstUpdateTitle}</div>
          <div>{event.firstUpdateText}</div>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <div>{event.postsCount} публикаций</div>
          <div>{event.sourceCount} источников</div>
          <div className="whitespace-nowrap">Обновлено {event.lastUpdatedAt} назад</div>
        </div>
      </CardContent>
    </Card>
  );
};
