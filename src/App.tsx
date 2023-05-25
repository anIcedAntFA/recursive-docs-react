import { useEffect, useState } from 'react';
import './App.css';
import RecursiveComponent from './components/RecursiveComponent';
import RecursiveTree from './components/RecursiveTree';
import Tree from './components/Tree';
import { getTreeData } from './utils/getTreeData';
import { TreeDataItem } from './types';

function App() {
  const [data, setData] = useState<TreeDataItem[]>([]);

  useEffect(() => {
    if (localStorage.getItem('tree-data')) {
      setData(JSON.parse(localStorage.getItem('tree-data') as string));
    } else {
      const currentData = getTreeData();
      localStorage.setItem('tree-data', JSON.stringify(currentData));
      setData(currentData);
    }
  }, []);

  const addItem = (item: TreeDataItem) => {
    const newData = [...data, item];
    setData(newData);
  };

  const toggleHasChildren = (id: number) => {
    const newData = [...data];
    newData.map((item) => {
      if (item.id === id) {
        item.hasChildren = !item.hasChildren;
      }
      return item;
    });
    setData(newData);
  };

  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <>
      {/* <RecursiveTree data={treeData} />
      <RecursiveComponent msg='hello' /> */}
      <Tree
        treeData={data}
        setData={addItem}
        toggleHasChildren={toggleHasChildren}
      />
    </>
  );
}

export default App;
