import { useSelector } from 'react-redux';
import styles from './index.module.scss';
import EditPanel from '@/components/QnComponents/EditPanel';

// 编辑页-右侧
function RightSide() {
  const coms = useSelector(state => state.editor.coms)
  const currentComponentIndex = useSelector(state => state.editor.currentComponentIndex);

  return (
    <div className={styles["right-side-container"]}>
      <EditPanel coms={coms[currentComponentIndex]} />
    </div>
  )
}

export default RightSide