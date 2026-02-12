import { ArticleHeader } from '@/components/custom/ArticleHeader/ui/ArticleHeader.tsx';
import { WhatsNew } from '@/components/custom/WhatsNew/ui/WhatsNew.tsx';
import { AllSourcesPostsList } from '@/components/custom/AllSourcesPostsList/ui/AllSourcesPostsList.tsx';
import { Summary } from '@/widgets/Summary/ui/Summary.tsx';
import { article } from '@/shared/mocks.ts';
import { useEffect } from 'react';
import { BackButton } from '@/components/custom/BackButton/ui/BackButton.tsx';

export const ArticlePage = () => {
  const { headerData, whatsNew, allSources } = article;

  useEffect(() => {
    //TODO: /api/stories/{id}/seen
  }, []);
  return (
    <div className="flex flex-col lg:flex-row justify-between items-center w-full gap-4">
      <div className="flex flex-col flex-1 justify-center items-start gap-6 h-full self-start w-full">
        <div className="md:pl-14 w-full flex flex-col gap-6">
          <BackButton />
          <div className="flex flex-col w-full items-center justify-center">
            <ArticleHeader data={headerData} />
            <WhatsNew data={whatsNew} />
          </div>
        </div>

        <AllSourcesPostsList data={allSources} />
      </div>
      <div className="flex-1 flex items-start w-full">
        <Summary />
      </div>
    </div>
  );
};
