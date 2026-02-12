import { ChevronDown, X } from 'lucide-react';

interface AddSourceModalProps {
  open: boolean;
  onClose: () => void;
}
//TODO: добавить работу с бекендом
export const AddSourceModal = ({ open, onClose }: AddSourceModalProps) => {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/40" onClick={onClose} />

      <div className="relative z-10 w-full max-w-md rounded-2xl bg-white p-6 shadow-lg">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-semibold">Добавить источник</h3>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-800">
            <X />
          </button>
        </div>

        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-1">
            <label className="text-sm text-gray-600">URL</label>
            <input
              type="text"
              placeholder="https://example.com"
              className="rounded-lg border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="relative">
            <select className="w-full appearance-none rounded-lg border px-3 py-2 pr-10 focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option value="smi">СМИ</option>
              <option value="ia">ИА</option>
              <option value="press">Пресс-служба</option>
            </select>

            <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500" />
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-sm text-gray-600">Регион</label>
            <input
              type="text"
              placeholder="Москва"
              className="rounded-lg border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        <div className="mt-6 flex justify-end gap-3">
          <button onClick={onClose} className="rounded-lg px-4 py-2 text-gray-600 hover:bg-gray-100">
            Отмена
          </button>
          <button disabled className="rounded-lg bg-blue-500 px-4 py-2 text-white opacity-50 cursor-not-allowed">
            Добавить
          </button>
        </div>
      </div>
    </div>
  );
};
