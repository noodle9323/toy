import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from '@shared/ui/NavigationMenu';

import Link from 'next/link';
import { NAVIGATION_MENUS } from '../model';
import { PATHS } from '@shared/constants/path';

const GnbNavigationMenu = () => {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        {NAVIGATION_MENUS.map((menu) => (
          <NavigationMenuItem key={menu.name}>
            <NavigationMenuLink asChild>
              <Link
                href={String(PATHS[menu.path as keyof typeof PATHS])}
                className={navigationMenuTriggerStyle()}
              >
                {menu.name}
              </Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default GnbNavigationMenu;
