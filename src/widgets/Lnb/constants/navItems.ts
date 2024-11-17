import { FileText, Home, Search, Settings } from 'lucide-react';

import { NavItem } from '@widgets/Lnb/types';
import { PATHS } from '@shared/constants/path';

export const topNavItem: NavItem = {
  href: PATHS.ROOT,
  icon: Home,
  label: '메인 페이지',
};

export const navItems: NavItem[] = [
  { href: PATHS.SEARCH, icon: Search, label: '검색' },
  { href: PATHS.ARTICLES, icon: FileText, label: '아티클' },
];

export const bottomNavItem: NavItem = {
  href: PATHS.SETTINGS,
  icon: Settings,
  label: '설정',
};
