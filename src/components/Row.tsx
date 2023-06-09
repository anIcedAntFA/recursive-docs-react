import styles from './row.module.scss';
import classnames from 'classnames';
import FolderIcon from '@mui/icons-material/Folder';
import DescriptionIcon from '@mui/icons-material/Description';
import ChevronRightRoundedIcon from '@mui/icons-material/ChevronRightRounded';
import FolderOpenRoundedIcon from '@mui/icons-material/FolderOpenRounded';
import { useState } from 'react';
import { RowProps, TreeDataItem } from '../types';

export default function Row({
  item,
  level,
  children,
  setData,
  toggleHasChildren,
}: RowProps) {
  const [isCollapsed, setIsCollapsed] = useState(true);
  const entityIcon = item.hasChildren ? (
    isCollapsed ? (
      <FolderIcon className={styles.folder} />
    ) : (
      <FolderOpenRoundedIcon className={styles.folderOpen} />
    )
  ) : (
    <DescriptionIcon className={styles.file} />
  );

  const handleAdd = () => {
    console.log('item', item);
    const newItem: TreeDataItem = {
      id: new Date().getTime() + Math.random(),
      text: 'New Folder',
      parentId: item.id,
      hasChildren: false,
    };
    if (!item.hasChildren) toggleHasChildren(item.id);
    setData(newItem);
  };
  console.log('re-render');
  return (
    <div key={`section-${item.id}`}>
      <div
        className={classnames(styles.row, styles[`level-${level}`])}
        onClick={() => setIsCollapsed(!isCollapsed)}
      >
        {!item.hasChildren ? null : (
          <ChevronRightRoundedIcon
            className={classnames(styles.chevron, {
              [styles.rotated]: !isCollapsed,
            })}
          />
        )}
        {entityIcon}
        <span className={styles.text}>{item.text}</span>
        <button onClick={handleAdd}>add</button>
      </div>
      <div
        className={classnames(styles.children, {
          [styles.collapsed]: isCollapsed,
        })}
      >
        {children}
      </div>
    </div>
  );
}
