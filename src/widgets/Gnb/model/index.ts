import { MENU } from '@shared/constants/menu';
import { PATHS } from '@shared/constants/path';

interface NavgationMenu {
  name: string;
  path: keyof typeof PATHS;
}

export const NAVIGATION_MENUS: NavgationMenu[] = [
  { name: MENU.THREADS, path: 'ROOT' },
  { name: MENU.DASHBOARD, path: 'DASHBOARD' },
];
