import { sourcesMap } from '@/shared/mocks.ts';
import { SourcesTable } from '@/components/custom/SourcesTable/ui/SourcesTable.tsx';
import { useState } from 'react';
import { AddSourceModal } from '@/components/custom/AddSourceModal/ui/AddSourceModal.tsx';

export const SourcesPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="flex flex-col items-center gap-6 p-6">
      <div className="flex w-full max-w-6xl items-center justify-between">
        <h2 className="text-4xl font-semibold">Источники</h2>
        <button
          onClick={() => setIsModalOpen(true)}
          className="rounded-xl bg-blue-500 px-5 py-2 text-white hover:bg-blue-600 transition"
        >
          Добавить источник
        </button>
      </div>

      <div className="w-full max-w-6xl rounded-2xl border bg-white shadow-sm overflow-hidden">
        <SourcesTable sources={sourcesMap} />
      </div>

      <AddSourceModal open={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
};
