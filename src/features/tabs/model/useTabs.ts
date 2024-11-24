'use client';

import { useCallback, useState } from 'react';

import { TabId } from './types';

export function useTabs(initialTab: TabId) {
  const [activeTab, setActiveTab] = useState(initialTab);
  const [tabHistory, setTabHistory] = useState<TabId[]>([initialTab]);

  const changeTab = (tabId: TabId) => {
    setActiveTab(tabId);
    setTabHistory((prev) => [...prev, tabId]);
  };

  const goBack = useCallback(() => {
    if (tabHistory.length > 1) {
      const newHistory = tabHistory.slice(0, -1);
      setTabHistory(newHistory);
      setActiveTab(newHistory[newHistory.length - 1]);
    }
  }, [tabHistory]);

  return { activeTab, changeTab, goBack, tabHistory };
}
