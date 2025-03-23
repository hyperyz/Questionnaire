import { useSelector } from 'react-redux'
import styles from './index.module.scss'
import { nameToComMap } from '@/configs/nametoComMap';
// 编辑页-中间画布区域
function Center() {
  const coms = useSelector(state => state.editor.coms)
  console.log('中间，coms:', coms);

  return (
    <div className={styles["center-container"]}>
      {
        coms.map((com, index: number) => {
          const Com = nameToComMap[com.name];
          return (
            <div key={index}>
              <Com status={com.status} />
            </div>
          )
        })
      }
    </div>
  )
}

export default Center