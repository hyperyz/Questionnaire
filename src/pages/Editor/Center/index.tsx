import { useSelector, useDispatch } from 'react-redux'
import styles from './index.module.scss'
import { nameToComMap } from '@/configs/nametoComMap';
import { setCurrentComponentIndex } from '@/store/editorSlice';
// 编辑页-中间画布区域
function Center() {
  const dispatch = useDispatch()
  const coms = useSelector(state => state.editor.coms)
  const currentComponentIndex = useSelector(state => state.editor.currentComponentIndex)
  const handleClickCompoent = (index: number) => {
    dispatch(setCurrentComponentIndex(index))
  }
  return (
    <div className={styles["center-container"]}>
      {
        coms.map((com, index: number) => {
          const Com = nameToComMap[com.name];
          return (
            <div key={index} className={`${styles.content} mb-10 relative ${currentComponentIndex === index ? styles.active : ''}`} onClick={() => handleClickCompoent(index)}>
              <Com status={com.status} />
            </div>
          )
        })
      }
    </div>
  )
}

export default Center