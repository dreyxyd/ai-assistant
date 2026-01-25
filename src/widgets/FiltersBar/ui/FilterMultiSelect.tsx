import { Check, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Command, CommandGroup, CommandItem } from '@/components/ui/command';
import { cn } from '@/lib/utils';
import { getMultiSelectLabel } from '@/widgets/FiltersBar/ui/lib/getMultiSelectLabel.ts';

interface FilterMultiSelectProps {
  placeholder: string;
  value: string[];
  onChange: (value: string[]) => void;
  options: string[];
}

const MAX_VISIBLE = 2;

export const FilterMultiSelect = ({ placeholder, value, onChange, options }: FilterMultiSelectProps) => {
  const toggleValue = (option: string) => {
    onChange(value.includes(option) ? value.filter((v) => v !== option) : [...value, option]);
  };

  const isAllSelected = value.length === options.length && options.length > 0;

  const toggleAll = () => {
    onChange(isAllSelected ? [] : options);
  };

  const label = getMultiSelectLabel(value, placeholder, MAX_VISIBLE);

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          className="w-[160px] justify-between truncate text-neutral-500 hover:text-neutral-500"
        >
          <span className="truncate">{label}</span>
          <ChevronDown className="h-4 w-4 opacity-50 shrink-0" />
        </Button>
      </PopoverTrigger>

      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandGroup>
            <CommandItem onSelect={toggleAll} className="flex items-center gap-2 font-medium">
              <Check className={cn('h-4 w-4', isAllSelected ? 'opacity-100' : 'opacity-0')} />
              {isAllSelected ? 'Снять всё' : 'Выбрать всё'}
            </CommandItem>

            <div className="my-1 h-px bg-border" />

            {options.map((option) => (
              <CommandItem key={option} onSelect={() => toggleValue(option)} className="flex items-center gap-2">
                <Check className={cn('h-4 w-4', value.includes(option) ? 'opacity-100' : 'opacity-0')} />
                {option}
              </CommandItem>
            ))}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  );
};
