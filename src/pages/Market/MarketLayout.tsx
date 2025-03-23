import { Outlet } from 'react-router-dom';
import styles from './index.module.scss';
import EditPanel from '@/components/SurveyComs/EditPanel';
import { useSelector } from 'react-redux';
function Layout({ children }: { children: React.ReactNode }): React.ReactElement<React.ReactElement<any>> {
    const comsSlice = useSelector(state => state.coms)
    const allComs = comsSlice.coms
    const currentCom = comsSlice.currentMaterialCom
    const status = allComs[currentCom].status

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