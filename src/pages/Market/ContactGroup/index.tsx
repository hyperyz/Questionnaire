import Layout from '../MarketLayout'
import { Link } from 'react-router-dom'

function ContactGroup(): React.ReactElement {
    return (
        <Layout>
            <Link to="/" className='link-item mb-15'>手机</Link>
            <Link to="/" className='link-item mb-15'>微信号</Link>
            <Link to="/" className='link-item mb-15'>QQ号</Link>
            <Link to="/" className='link-item mb-15'>邮箱</Link>
            <Link to="/" className='link-item mb-15'>地址</Link>
        </Layout>
    )
}

export default ContactGroup