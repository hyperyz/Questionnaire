import Layout from '../MarketLayout'
import { Link } from 'react-router-dom'

function AdvancedGroup(): React.ReactElement {
    return (
        <Layout>
            <Link to="/" className='link-item mb-15'>评价/打分</Link>
            <Link to="/" className='link-item mb-15'>日期时间</Link>
        </Layout>
    )
}

export default AdvancedGroup