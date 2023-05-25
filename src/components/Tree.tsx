import { TreeProps } from '../types';
import Row from './Row';

function Tree({
  treeData,
  parentId = 0,
  level = 0,
  setData,
  toggleHasChildren,
}: TreeProps) {
  const items = treeData
    .filter((item) => item.parentId === parentId)
    .sort((a, b) => (a.text > b.text ? 1 : -1));

  if (!items.length) return null;

  return (
    <>
      {items.map((item) => (
        <Row
          key={item.id}
          item={item}
          level={level}
          setData={setData}
          toggleHasChildren={toggleHasChildren}
        >
          <Tree
            treeData={treeData}
            parentId={item.id}
            level={level + 1}
            setData={setData}
            toggleHasChildren={toggleHasChildren}
          />
        </Row>
      ))}
    </>
  );
}

export default Tree;
