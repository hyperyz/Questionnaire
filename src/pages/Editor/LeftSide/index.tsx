import { Outlet } from 'react-router-dom'
import styles from './index.module.scss'
import { useNavigate, useLocation } from 'react-router-dom'
import { MenuOutlined, ProfileOutlined } from '@ant-design/icons'
function LeftSide() {
  const navigate = useNavigate()
  const location = useLocation()

  return (
    <div className={`${styles['left-side-container']} flex`}>
      <div className={styles.tabs}>
        <div className={`${styles['tab-item']} ${location.pathname === '/editor' ? styles['tab-show'] : ''}`} onClick={() => navigate('/editor')}>
          <ProfileOutlined />
          <span className={`${styles['tab-item-title']} mt-5`} >题型</span>
        </div>
        <div className={`${styles['tab-item']} ${location.pathname === '/editor/outline' ? styles['tab-show'] : ''}`} onClick={() => navigate('/editor/outline')}>
          <MenuOutlined />
          <span className={`${styles['tab-item-title']} mt-5`} >大纲</span>
        </div>
      </div>
      <Outlet />
    </div>
  )
}

export default LeftSide