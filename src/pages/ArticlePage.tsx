import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import { ArticleHeader } from '@/components/custom/ArticleHeader/ui/ArticleHeader.tsx';
import { WhatsNew } from '@/components/custom/WhatsNew/ui/WhatsNew.tsx';
import { AllSourcesPostsList } from '@/components/custom/AllSourcesPostsList/ui/AllSourcesPostsList.tsx';
import { Summary } from '@/widgets/Summary/ui/Summary.tsx';
import { BackButton } from '@/components/custom/BackButton/ui/BackButton.tsx';
import { fetchStoryById } from '@/shared/api/stories.ts';
import {
  mapStoryDetailToFactsTimeline,
  mapStoryDetailToHeader,
  mapStoryDetailToPublications,
  mapStoryDetailToWhatsNew,
} from '@/shared/api/mapStoryDetail.ts';

export const ArticlePage = () => {
  const { id } = useParams<{ id: string }>();

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ['story', id],
    queryFn: () => fetchStoryById(id!),
    enabled: Boolean(id),
  });

  if (!id) {
    return (
      <div className="text-destructive p-6">
        Не указан идентификатор сюжета
      </div>
    );
  }

  if (isLoading) {
    return <div className="text-muted-foreground p-6">Загрузка...</div>;
  }

  if (isError) {
    const message =
      error instanceof Error && error.message === 'NOT_FOUND'
        ? 'Сюжет не найден'
        : error instanceof Error
          ? error.message
          : 'Не удалось загрузить сюжет';
    return <div className="text-destructive p-6">{message}</div>;
  }

  if (!data) {
    return null;
  }

  const headerData = mapStoryDetailToHeader(data);
  const whatsNew = mapStoryDetailToWhatsNew(data);
  const publications = mapStoryDetailToPublications(data);
  const factsTimeline = mapStoryDetailToFactsTimeline(data);

  return (
    <div className="flex flex-col lg:flex-row justify-between items-center w-full gap-4">
      <div className="flex flex-col flex-1 justify-center items-start gap-6 h-full self-start w-full">
        <div className="md:pl-14 w-full flex flex-col gap-6">
          <BackButton />
          <div className="flex flex-col w-full items-center justify-center">
            <ArticleHeader data={headerData} />
            {whatsNew.length > 0 && <WhatsNew data={whatsNew} />}
          </div>
        </div>

        <AllSourcesPostsList data={publications} />
      </div>
      <div className="flex-1 flex items-start w-full">
        <Summary facts={factsTimeline} factsTotal={data.facts_total} />
      </div>
    </div>
  );
};
