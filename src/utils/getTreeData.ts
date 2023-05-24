import nestedTreeData from '../assets/nestedTreeData.json';

type TreeDataItem = {
  id: number;
  text: string;
  parentId: number;
  hasChildren: boolean;
};

export function getTreeData(): TreeDataItem[] {
  return nestedTreeData.map((item) => ({
    ...item,
    hasChildren:
      nestedTreeData.filter((i) => i.parentId === item.id).length > 0,
  }));
}
