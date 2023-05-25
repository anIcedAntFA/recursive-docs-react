import nestedTreeData from '../assets/nestedTreeData.json';
import { TreeDataItem } from '../types';

export function getTreeData(): TreeDataItem[] {
  return nestedTreeData.map((item) => ({
    ...item,
    hasChildren:
      nestedTreeData.filter((i) => i.parentId === item.id).length > 0,
  }));
}

console.log(nestedTreeData);
console.log(getTreeData());
