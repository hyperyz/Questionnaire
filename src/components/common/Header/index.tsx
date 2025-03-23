import { Button, Avatar } from 'antd'
import { LeftCircleOutlined, UserOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import styles from './index.module.scss'

// 组件市场页与问卷编辑页的共同header
function Header(): React.ReactElement {
    const navigate = useNavigate();
    return (
        <>
            <div className={`${styles.container} flex self-start align-items-center border-box`}>
                <Button className={`ml-15 mr-15`} shape="circle" icon={<LeftCircleOutlined />} onClick={() => { navigate('/') }} />
                <div className={`${styles.center} flex align-items-center space-between pl-15 pr-15`}></div>
                <div className={`${styles.right} flex justify-content-center align-items-center`}>
                    <Avatar shape="square" size="small" icon={<UserOutlined />} />
                </div>
            </div>

        </>
    )
}

export default Header