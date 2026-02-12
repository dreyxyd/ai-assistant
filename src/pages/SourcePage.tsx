import { BackButton } from '@/components/custom/BackButton/ui/BackButton.tsx';

import { Square } from 'lucide-react';
import { sourceTypesMap } from '../../shared/consts.tsx';
import { SourcePost } from '@/components/custom/SourcePost/ui/SourcePost.tsx';
import { singleSourceContent } from '@/shared/mocks.ts';

//TODO: реализовать логику с бекендом

export const SourcePage = () => {
  return (
    <div className="flex flex-col items-center gap-6 p-0 md:p-6">
      <div className="w-full max-w-6xl">
        <BackButton />
        <div className="flex items-senter justify-start gap-1">
          <Square color="blue" fill="blue" size={74} />
          <div className="flex flex-col justify-center items-start">
            <div className="text-3xl fonst-bold">{singleSourceContent.source.name}</div>
            <div className="flex flex-row items-center gap-2 text-neutral-500">
              <div>Тип: {sourceTypesMap[singleSourceContent.source.type]}</div>
              <div>Регион: {singleSourceContent.source.region}</div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full max-w-6xl rounded-2xl overflow-hidden flex flex-col gap-4 p-1">
        {singleSourceContent.publications.map((publication) => (
          <SourcePost data={publication} />
        ))}
      </div>
    </div>
  );
};
