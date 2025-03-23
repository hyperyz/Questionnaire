import Layout from '../MarketLayout'
import { Link } from 'react-router-dom'

function InfoGroup(): React.ReactElement {
    return (
        <Layout>
            <Link to="/" className='link-item mb-15'>姓名</Link>
            <Link to="/" className='link-item mb-15'>身份证</Link>
            <Link to="/" className='link-item mb-15'>出生日期</Link>
            <Link to="/" className='link-item mb-15'>性别</Link>
            <Link to="/" className='link-item mb-15'>年龄</Link>
            <Link to="/" className='link-item mb-15'>学历</Link>
            <Link to="/" className='link-item mb-15'>大学</Link>
            <Link to="/" className='link-item mb-15'>专业</Link>
            <Link to="/" className='link-item mb-15'>职业</Link>
            <Link to="/" className='link-item mb-15'>公司</Link>
        </Layout>
    )
}

export default InfoGroup