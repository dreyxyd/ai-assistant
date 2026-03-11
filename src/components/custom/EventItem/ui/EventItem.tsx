import { useMutation, useQueryClient } from '@tanstack/react-query';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card.tsx';
import { Star } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '../../../../../shared/consts.tsx';
import type { Story } from '@/shared/api/types.ts';
import { formatTime } from '@/lib/formatters.ts';
import { setStorySeen, setStoryStarred } from '@/shared/api/stories.ts';

interface EventItemProps {
  event: Story;
  showImage?: boolean;
}

export const EventItem = ({ event, showImage = false }: EventItemProps) => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const {
    ai_title,
    first_publication,
    last_significant_update,
    publications_count,
    sources_count,
    updated_ago,
    is_starred_by_me,
    is_unseen_by_me,
  } = event;

  const starMutation = useMutation({
    mutationFn: () => setStoryStarred(event.id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['stories'] });
    },
  });
  const storySeen = useMutation({
    mutationFn: () => setStorySeen(event.id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['stories'] });
    },
  });

  const goToArticle = () => {
    storySeen.mutate();
    navigate(ROUTES.article(event.id));
  };

  const handleStarClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    starMutation.mutate();
  };

  const lastTitle = `${formatTime(last_significant_update.published_at)} · ${last_significant_update.source.name}`;
  const firstTitle = `${formatTime(first_publication.published_at)} · ${first_publication.source.name}`;

  return (
    <Card key={event.id}>
      <CardHeader>
        {showImage && event.image_url && (
          <div className="w-full">
            <img alt="" src={event.image_url} className="rounded-xl cursor-pointer w-full object-cover" />
          </div>
        )}
        <CardTitle className="flex flex-col items-start justify-between gap-2 xl:flex-row">
          <div className="flex flex-row items-center justify-center gap-2">
            <div onClick={goToArticle} className="hover:text-blue-600 cursor-pointer transition-colors duration-300">
              {ai_title}
            </div>
          </div>
          {is_unseen_by_me && (
            <span className="rounded-full bg-amber-400 px-2 py-0.5 text-xs font-medium text-black">Новое</span>
          )}
          <button
            type="button"
            className="cursor-pointer disabled:opacity-50"
            aria-label={is_starred_by_me ? 'Убрать из избранного' : 'В избранное'}
            onClick={handleStarClick}
            disabled={starMutation.isPending}
          >
            <Star className={is_starred_by_me ? 'fill-current text-amber-500' : ''} />
          </button>
        </CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        <div>
          <div className="font-bold">Последнее значимое: {lastTitle}</div>
          <div>{last_significant_update.text}</div>
        </div>
        <div>
          <div className="font-bold">С чего началось: {firstTitle}</div>
          <div>{first_publication.text}</div>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <div>{publications_count} публикаций</div>
          <div>{sources_count} источников</div>
          <div className="whitespace-nowrap">Обновлено {updated_ago}</div>
        </div>
      </CardContent>
    </Card>
  );
};
