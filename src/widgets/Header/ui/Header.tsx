import { SearchBar } from '@/components/custom/SearchBar/ui/SearchBar.tsx';
import { ProfileDropdown } from '@/components/custom/ProfileDropdown/ui/ProfileDropdown.tsx';
import { NavigationTabs } from '@/components/custom/NavigationTabs/ui/NavigationTabs.tsx';

export const Header = () => {
  return (
    <div className="w-full h-16 flex items-center justify-between gap-2 px-16 border-b border-gray-200">
      <NavigationTabs />
      <div className="flex items-center gap-4">
        <SearchBar />
        <ProfileDropdown />
      </div>
    </div>
  );
};
