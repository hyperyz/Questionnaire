import styles from './index.module.scss';

function PicItem({ picTitle, picDesc }) {
  return (
    <div className={`${styles.container} mb-10`}>
      {/* 图片 */}
      <div className='top flex justify-content-center align-items-center'>

      </div>

      {/* 图片标题和描述 */}
      <div
        className="bottom flex justify-content-center align-items-center flex-direction-column font-weight-500"
      >
        <div className={styles.desc}>{picTitle}</div>
        <div className="desc mt-5 mb-5">{picDesc}</div>
      </div>
    </div>
  )
}

export default PicItem