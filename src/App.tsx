import './App.css';
import RecursiveComponent from './components/RecursiveComponent';
import RecursiveTree from './components/RecursiveTree';
import Tree from './components/Tree';
import { getTreeData } from './utils/getTreeData';

function App() {
  return (
    <>
      {/* <RecursiveTree data={treeData} />
      <RecursiveComponent msg='hello' /> */}
      <Tree treeData={getTreeData()} />
    </>
  );
}

export default App;
