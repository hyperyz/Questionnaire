import Layout from '../Layout'
import { Link } from 'react-router-dom'
function SelectGroup(): React.ReactElement {
    return (
        <Layout>
            <Link to="/" className='link-item mb-15'>单选题</Link>
            <Link to="/" className='link-item mb-15'>多选题</Link>
            <Link to="/" className='link-item mb-15'>下拉选择</Link>
            <Link to="/" className='link-item mb-15'>图片单选题</Link>
            <Link to="/" className='link-item mb-15'>图片多选题</Link>
        </Layout>
    )
}

export default SelectGroup