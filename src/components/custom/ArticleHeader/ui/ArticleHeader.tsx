import { useMutation, useQueryClient } from '@tanstack/react-query';
import { FileSpreadsheet, Search, Star } from 'lucide-react';
import { useParams } from 'react-router-dom';
import { setStoryStarred } from '@/shared/api/stories.ts';

export interface HeaderData {
  storyId: string | number;
  is_starred_by_me?: boolean;
  ai_title: string;
  last_significant_update_at: string;
  publications_count: number;
  sources_count: number;
}
interface ArticleHeader {
  data: HeaderData;
}
export const ArticleHeader = ({ data }: ArticleHeader) => {
  const queryClient = useQueryClient();
  const { id: routeStoryId } = useParams<{ id: string }>();
  const { storyId, is_starred_by_me, ai_title, last_significant_update_at, publications_count, sources_count } = data;

  const starMutation = useMutation({
    mutationFn: () => setStoryStarred(storyId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['stories'] });
      queryClient.invalidateQueries({ queryKey: ['story', routeStoryId] });
    },
  });

  return (
    <div className="flex flex-col justify-center gap-2">
      <div className="flex flex-row items-start gap-2">
        <button
          type="button"
          className="cursor-pointer shrink-0 disabled:opacity-50"
          aria-label={is_starred_by_me ? 'Убрать из избранного' : 'В избранное'}
          onClick={() => starMutation.mutate()}
          disabled={starMutation.isPending}
        >
          <Star className={is_starred_by_me ? 'fill-current text-amber-500' : ''} />
        </button>
        <span className="text-xl font-bold">{ai_title}</span>
      </div>
      <div className="flex flex-row gap-2 text-neutral-400">
        <div>Обновлено {last_significant_update_at} назад</div>
        <div className="flex flex-row gap-2 items-center">
          <FileSpreadsheet size={16} /> {publications_count}
        </div>
        <div className="flex flex-row gap-2 items-center">
          <Search size={16} />
          {sources_count} Источников
        </div>
      </div>
    </div>
  );
};
