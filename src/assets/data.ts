export interface IData {
  id: number;
  type: string;
  name: string;
  children: IData[];
}

export const treeData = [
  {
    id: 1,
    type: 'folder',
    name: 'vue2x',
    children: [
      {
        id: 2,
        type: 'folder',
        name: 'react18',
        children: [],
      },
    ],
  },
  {
    id: 3,
    type: 'folder',
    name: 'vue3',
    children: [
      {
        id: 4,
        type: 'folder',
        name: 'angular',
        children: [],
      },
    ],
  },
];
