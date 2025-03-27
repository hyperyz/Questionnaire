import React from "react"
import Header from '@/components/Common/Header'
import { CheckOutlined, EditOutlined, FileOutlined, PhoneOutlined, MessageOutlined, UserOutlined } from '@ant-design/icons'
import styles from './index.module.scss'
import { Link, Outlet } from "react-router-dom"
function Market(): React.ReactElement {
    return (
        <>
            <Header />
            <div>
                <h1 className="font-weight-100 text-center m0 p0">组件市场</h1>
                <div className={`${styles.container} mc flex`}>
                    {/* 左侧垂直导航栏 */}
                    <nav className={`${styles.category} mc`}>
                        <Link className={styles['category-item']} to="/components">
                            <CheckOutlined />
                            <div>选择</div>
                        </Link>
                        <Link className={styles['category-item']} to="/components/input-group">
                            <EditOutlined />
                            <div>文本输入</div>
                        </Link>
                        <Link className={styles['category-item']} to="/components/advanced-group">
                            <FileOutlined />
                            <div>高级题型</div>
                        </Link>
                        <Link className={styles['category-item']} to="/components/note-group">
                            <MessageOutlined />
                            <div>备注说明</div>
                        </Link>
                        <Link className={styles['category-item']} to="/components/info-group">
                            <UserOutlined />
                            <div>个人信息</div>
                        </Link>
                        <Link className={styles['category-item']} to="/components/contact-group">
                            <PhoneOutlined />
                            <div>联系方式</div>
                        </Link>
                    </nav>
                    {/* 右侧三列布局 */}
                    <div className={styles.coms}>
                        <Outlet />
                    </div>
                </div>

            </div>

        </>
    )
}

export default Market
