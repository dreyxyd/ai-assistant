import { EventsStream } from '@/widgets/EventsStream/ui/EventsStream.tsx';
import { ArticlePage } from '@/pages/ArticlePage.tsx';

export const StreamPage = () => {
  return (
    <div className="flex flex-col justify-center gap-4">
      <div>
        <div className="font-bold text-3xl">Поток</div>
        <div className="text-neutral-400">Публикации за последние 24 часа</div>
      </div>
      <EventsStream />
      <ArticlePage />
    </div>
  );
};
