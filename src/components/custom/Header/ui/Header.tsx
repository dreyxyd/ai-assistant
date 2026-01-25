import { SearchBar } from '@/widgets/SearchBar/ui/SearchBar.tsx';
import { ProfileDropdown } from '@/widgets/ProfileDropdown/ui/ProfileDropdown.tsx';
import { NavigationTabs } from '@/widgets/NavigationTabs/ui/NavigationTabs.tsx';

export const Header = () => {
  return (
    <div className="w-full h-16 flex items-center justify-between gap-2 px-6 border-b border-gray-200">
      <NavigationTabs />
      <div className="flex items-center gap-4">
        <SearchBar />
        <ProfileDropdown />
      </div>
    </div>
  );
};
