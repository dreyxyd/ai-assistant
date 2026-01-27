import { ArticleHeader, type HeaderData } from '@/components/custom/ArticleHeader/ui/ArticleHeader.tsx';
import { WhatsNew, type WhatsNewItem } from '@/components/custom/WhatsNew/ui/WhatsNew.tsx';
import {
  type AllSourcesItem,
  AllSourcesPostsList,
} from '@/components/custom/AllSourcesPostsList/ui/AllSourcesPostsList.tsx';

interface Article {
  headerData: HeaderData;
  whatsNew: WhatsNewItem[];
  allSources: AllSourcesItem[];
}
const article: Article = {
  headerData: {
    isFavourite: true,
    title: 'Bitcoin Lightning Network Adoption Report',
    lastUpdatedAt: '2 минуты',
    postsCount: 42,
    sourcesCount: 18,
  },

  whatsNew: [
    {
      id: 1,
      time: '2026-01-15T09:10:00Z',
      title: 'New Lightning wallet reaches 1M users',
      confirmed: 1,
    },
    {
      id: 2,
      time: '2026-01-14T18:45:00Z',
      title: 'Major exchange enables Lightning withdrawals',
      confirmed: 1,
    },
    {
      id: 3,
      time: '2026-01-13T11:20:00Z',
      title: 'Routing fee optimization proposal discussed',
      confirmed: 0,
    },
  ],

  allSources: [
    {
      id: 101,
      time: '2026-01-15T08:55:00Z',
      sourceName: 'Bitcoin Magazine',
      title: 'Lightning Network Sees Rapid Growth in 2026',
      outerLink: 'https://bitcoinmagazine.com/markets/lightning-network-growth-2026',
    },
    {
      id: 102,
      time: '2026-01-14T16:30:00Z',
      sourceName: 'CoinDesk',
      title: 'Exchanges Accelerate Lightning Integration',
      outerLink: 'https://www.coindesk.com/tech/lightning-integration-exchanges',
    },
    {
      id: 103,
      time: '2026-01-13T10:05:00Z',
      sourceName: 'GitHub',
      title: 'Lightning RFC: Fee Management Improvements',
      outerLink: 'https://github.com/lightning/bolts/pull/1234',
    },
  ],
};

export const ArticlePage = () => {
  const { headerData, whatsNew, allSources } = article;
  return (
    <div className="flex flex-row justify-between items-center w-full gap-4">
      <div className="flex flex-col justify-center items-start gap-6">
        <div className="pl-14 w-full flex flex-col gap-6">
          <ArticleHeader data={headerData} />
          <WhatsNew data={whatsNew} />
        </div>

        <AllSourcesPostsList data={allSources} />
      </div>
      <div className="flex flex-col">Summary Widget</div>
    </div>
  );
};
