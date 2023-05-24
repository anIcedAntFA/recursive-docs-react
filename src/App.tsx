import './App.css';
import { treeData } from './assets/data';
import RecursiveComponent from './components/RecursiveComponent';
import RecursiveTree from './components/RecursiveTree';

function App() {
  return (
    <>
      <RecursiveTree data={treeData} />
      <RecursiveComponent msg='hello' />
    </>
  );
}

export default App;
