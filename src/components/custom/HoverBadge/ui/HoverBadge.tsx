import type { ReactNode } from 'react';

type HoverBadgePosition = 'top' | 'bottom';

interface HoverBadgeProps {
  placeholder: ReactNode;
  children: ReactNode;
  position?: HoverBadgePosition;
}

const POPOVER_POSITION_CLASSES: Record<HoverBadgePosition, string> = {
  bottom: 'top-full mt-2',
  top: 'bottom-full mb-2',
};

const BRIDGE_POSITION_CLASSES: Record<HoverBadgePosition, string> = {
  bottom: 'top-full',
  top: 'bottom-full',
};

export const HoverBadge = ({ placeholder, children, position = 'bottom' }: HoverBadgeProps) => {
  return (
    <div className="relative inline-flex group">
      <div
        className="
          text-sm
          rounded-full bg-gray-200 w-6 text-center
          cursor-pointer select-none z-10
          transition-opacity duration-400
          group-hover:opacity-40
        "
      >
        {placeholder}
      </div>

      <div
        className={`
          absolute right-0 h-2 w-full
          ${BRIDGE_POSITION_CLASSES[position]}
        `}
      />

      <div
        className={`
          absolute right-0 z-20 min-w-max
          rounded-md bg-white p-2 text-sm shadow-lg

          opacity-0 invisible pointer-events-none
          transition-all duration-400 ease-out

          group-hover:opacity-100
          group-hover:visible
          group-hover:pointer-events-auto

          ${POPOVER_POSITION_CLASSES[position]}
        `}
      >
        {children}
      </div>
    </div>
  );
};
