import React from 'react'
import styles from './index.module.scss'
function ButtonGroup({ title, status, children }) {
    return (
        <div className='flex align-items-center space-between'>
            <div className='flex align-items-center'>
                <div className='mr-20'>{title}</div>
                <div className={styles.currentStatus}>{status}</div>
            </div>
            <div>{children}</div>
        </div>
    )
}

export default ButtonGroup