import styles from './index.module.scss';
function Layout({ children }: { children: React.ReactNode }): React.ReactElement<React.ReactElement<any>> {
    return (
        <div className={`${styles['layout-container']} flex`}>
            <div className={`${styles.left} flex wrap space-between`}>
                {children}
            </div>
            <div className={styles.center}>
                显示组件
            </div>
            <div className={styles.right}>
                编辑面板
            </div>
        </div>
    )
}

export default Layout