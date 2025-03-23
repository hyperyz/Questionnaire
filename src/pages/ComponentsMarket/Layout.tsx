import { Outlet } from 'react-router-dom';
import styles from './index.module.scss';
import EditPanel from '@/components/SurveyComs/EditPanel';
import { useSelector } from 'react-redux';
function Layout({ children }: { children: React.ReactNode }): React.ReactElement<React.ReactElement<any>> {
    const currentCom = useSelector(state => state.currentMaterialCom)
    const allComs = useSelector(state => state.coms)
    const status = allComs[currentCom].status
    console.log('status:', status);

    return (
        <div className={`${styles['layout-container']} flex`}>
            <div className={`${styles.left} flex wrap space-between`}>
                {children}
            </div>
            <div className={styles.center}>
                <Outlet context={status} />
            </div>
            <div className={styles.right}>
                <EditPanel coms={allComs[currentCom]} />
            </div>
        </div>
    )
}

export default Layout