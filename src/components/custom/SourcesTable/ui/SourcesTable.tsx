import { Clock, Pause, Play, Square, Trash2 } from 'lucide-react';
interface Source {
  id: string;
  type: 'smi' | 'ia' | 'press';
  name: string;
  url: string;
  region: string;
  is_active: boolean;
  frequency_minutes: number;
  logo_url: string;
}
const typeConfig = {
  smi: { label: 'СМИ' },
  ia: { label: 'ИА' },
  press: { label: 'Пресс-служба' },
};

//TODO: добавить работу с бекендом
export const SourcesTable = ({ sources }: { sources: Source[] }) => {
  return (
    <div className="relative overflow-x-auto">
      <div className="min-w-[900px]">
        <div className="grid grid-cols-[1.5fr_0.7fr_0.9fr_1fr_0.8fr_2fr] gap-4 px-6 py-4 text-sm text-gray-500 border-b">
          <span>Источник</span>
          <span>Тип</span>
          <span>Регион</span>
          <span>Статус</span>
          <span>Частота</span>
          <span>Действия</span>
        </div>

        {sources.map((source, idx) => (
          <div
            key={idx}
            className="grid grid-cols-[1.5fr_0.7fr_0.9fr_1fr_0.8fr_2fr] gap-4 items-center px-6 py-4 border-b last:border-b-0"
          >
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-lg bg-gray-100 flex items-center justify-center">
                <Square className="h-5 w-5 text-gray-600" />
              </div>
              <span className="font-medium whitespace-nowrap">{source.url}</span>
            </div>

            <span>{typeConfig[source.type].label}</span>
            <span>{source.region}</span>

            <div className="flex items-center gap-2">
              <span className={`h-2 w-2 rounded-full ${source.is_active ? 'bg-green-500' : 'bg-red-500'}`} />
              <span className="text-sm whitespace-nowrap">{source.is_active ? 'Активен' : 'Приостановлен'}</span>
            </div>

            <div className="flex items-center gap-1 text-sm text-gray-600 whitespace-nowrap">
              <Clock className="h-4 w-4" />
              {source.frequency_minutes} мин
            </div>

            <div className="grid grid-cols-2 gap-3">
              <button className="w-40 flex items-center gap-1 text-gray-500 hover:text-gray-800 cursor-pointer">
                {source.is_active ? (
                  <>
                    <Pause size={18} />
                    <span>Приостановить</span>
                  </>
                ) : (
                  <>
                    <Play size={18} />
                    <span>Возобновить</span>
                  </>
                )}
              </button>

              <button className="flex items-center gap-1 text-gray-500 hover:text-red-600 cursor-pointer">
                <Trash2 size={18} />
                <span>Удалить</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
