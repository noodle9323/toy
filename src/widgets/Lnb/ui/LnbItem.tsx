import { cn } from '@shared/lib/utils';
import { IconButton } from '@shared/ui/IconButton';
import { LnbItemProps } from '@widgets/Lnb/types';
import Link from 'next/link';

const LnbItem = ({
  href,
  icon: Icon,
  label,
  isBottom = false,
  isHome = false,
}: LnbItemProps) => {
  return (
    <div className={cn(isBottom && 'flex-grow-0 w-full')}>
      <Link href={href} passHref className="w-full">
        <IconButton
          variant="ghost"
          size="lg"
          className="md:w-full md:justify-start p-3"
        >
          <Icon className="h-6 w-6" />
          <span
            className={cn(
              isHome ? 'sr-only' : 'sr-only md:not-sr-only md:ml-2',
            )}
          >
            {label}
          </span>
        </IconButton>
      </Link>
    </div>
  );
};

export default LnbItem;
