import { Outlet } from 'react-router-dom';
import styles from './index.module.scss';
import EditPanel from '@/components/QnComponents/EditPanel';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { IComponentHeader } from '@/types/componentsType';
import { StoreRootState } from '@/store';
function Layout({ children }: { children: React.ReactNode }): React.ReactElement<React.ReactElement<any>> {
    const { coms, currentCom } = useSelector((state: StoreRootState) => state.coms);

    // useEffect(() => {
    //     const status = coms[currentCom]?.status;
    //     console.log('看看status', status);

    //     setCenterStatus(status)
    // }, [currentCom, coms])

    return (
        <div className={`${styles['layout-container']} flex`}>
            <div className={`${styles.left} flex wrap space-between`}>
                {children}
            </div>
            <div className={styles.center}>
                <Outlet context={coms[currentCom].status as IComponentHeader} />
            </div>
            <div className={styles.right}>
                <EditPanel coms={coms[currentCom].status as IComponentHeader} />
            </div>
        </div>
    )
}

export default Layout