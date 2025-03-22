import React from "react"
import Header from '@/components/common/Header'
import { CheckOutlined, EditOutlined, FileOutlined, PhoneOutlined, MessageOutlined, UserOutlined } from '@ant-design/icons'
import styles from './index.module.scss'
import { Link, Outlet } from "react-router-dom"
function index(): React.ReactElement {
    return (
        <>
            <Header />
            <div>
                <h1 className="font-weight-100 text-center m0 p0">组件市场</h1>
                <div className={`${styles.container} mc flex`}>
                    <nav className={`${styles.category} mc`}>
                        <Link className={styles['category-item']} to="/materials">
                            <CheckOutlined />
                            <div>选择</div>
                        </Link>
                        <Link className={styles['category-item']} to="/materials/input-group">
                            <EditOutlined />
                            <div>文本输入</div>
                        </Link>
                        <Link className={styles['category-item']} to="/materials/advanced-group">
                            <FileOutlined />
                            <div>高级题型</div>
                        </Link>
                        <Link className={styles['category-item']} to="/materials/note-group">
                            <MessageOutlined />
                            <div>备注说明</div>
                        </Link>
                        <Link className={styles['category-item']} to="/materials/info-group">
                            <UserOutlined />
                            <div>个人信息</div>
                        </Link>
                        <Link className={styles['category-item']} to="/materials/contact-group">
                            <PhoneOutlined />
                            <div>联系方式</div>
                        </Link>
                    </nav>
                    <div className={styles.coms}>
                        <Outlet />
                    </div>
                </div>

            </div>

        </>
    )
}

export default index
