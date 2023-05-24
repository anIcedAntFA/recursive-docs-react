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
};

export type RowProps = {
  item: TreeDataItem;
  level: number;
  children: React.ReactNode;
};
