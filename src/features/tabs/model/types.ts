export type TabId = string;

export interface Tab {
  id: TabId;
  title: string;
  content: React.ReactNode;
}
