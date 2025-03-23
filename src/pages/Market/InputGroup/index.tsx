import React from 'react'
import Layout from '../MarketLayout'
import { Link } from 'react-router-dom'
function index(): React.ReactElement {
    return (
        <Layout>
            <Link to="/" className='link-item mb-15'>文本输入</Link>
        </Layout>
    )
}

export default index