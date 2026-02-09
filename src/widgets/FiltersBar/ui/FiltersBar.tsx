import { Input } from '@/components/ui/input.tsx';
import { Button } from '@/components/ui/button.tsx';
import { FilterSelect } from '@/widgets/FiltersBar/ui/FilterSelect.tsx';
import { periodOptions, sourceOptions, typeOptions } from '../../../../shared/consts.tsx';
import { FilterMultiSelect } from '@/widgets/FiltersBar/ui/FilterMultiSelect.tsx';

export const FiltersBar = ({ filters, setFilters }) => {
  const resetFilters = () => {
    setFilters({
      type: '',
      period: '',
      source: [],
      query: '',
    });
  };

  return (
    <div className="w-full flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
      <div className="grid grid-cols-2 gap-2 sm:flex sm:flex-row sm:gap-4 sm:items-center">
        <FilterSelect
          placeholder="Тип"
          value={filters.type}
          onChange={(val) => setFilters({ ...filters, type: val })}
          options={typeOptions}
        />

        <FilterSelect
          placeholder="Период"
          value={filters.period}
          onChange={(val) => setFilters({ ...filters, period: val })}
          options={periodOptions}
        />

        <FilterMultiSelect
          placeholder="Источник"
          value={filters.source}
          onChange={(val) => setFilters({ ...filters, source: val })}
          options={sourceOptions}
        />

        <Input
          type="search"
          placeholder="Поиск по источникам"
          value={filters.query}
          onChange={(e) => setFilters({ ...filters, query: e.target.value })}
          className="w-full text-xs sm:w-[260px]"
        />
      </div>

      <Button variant="outline" onClick={resetFilters}>
        Сбросить
      </Button>
    </div>
  );
};
