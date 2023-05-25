export type TreeDataItem = {
  id: number;
  text: string;
  parentId: number;
  hasChildren: boolean;
};

export type TreeDataProp = {
  treeData: TreeDataItem[];
};

export type TreeProps = {
  treeData: TreeDataItem[];
  parentId?: number;
  level?: number;
  setData: (item: TreeDataItem) => void;
  toggleHasChildren: (id: number) => void;
};

export type RowProps = {
  item: TreeDataItem;
  level: number;
  children: React.ReactNode;
  setData: (item: TreeDataItem) => void;
  toggleHasChildren: (id: number) => void;
};
