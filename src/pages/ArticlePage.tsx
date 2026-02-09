import { ArticleHeader } from '@/components/custom/ArticleHeader/ui/ArticleHeader.tsx';
import { WhatsNew } from '@/components/custom/WhatsNew/ui/WhatsNew.tsx';
import { AllSourcesPostsList } from '@/components/custom/AllSourcesPostsList/ui/AllSourcesPostsList.tsx';
import { Summary } from '@/widgets/Summary/ui/Summary.tsx';
import { article } from '@/shared/mocks.ts';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button.tsx';
import { ArrowLeft, ChevronLeft } from 'lucide-react';

export const ArticlePage = () => {
  const navigate = useNavigate();
  const { headerData, whatsNew, allSources } = article;

  return (
    <div className="flex flex-col lg:flex-row justify-between items-center w-full gap-4">
      <div className="flex flex-col flex-1 justify-center items-start gap-6 h-full self-start w-full">
        <div className="md:pl-14 w-full flex flex-col gap-6">
          <Button
            className="-ml-9 mb-2 gap-1 text-muted-foreground hover:text-foreground w-32 bg-white hover:bg-gray-100"
            onClick={() => navigate(-1)}
          >
            <ArrowLeft />
            Назад
          </Button>
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
