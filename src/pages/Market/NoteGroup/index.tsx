import Layout from '../MarketLayout'
import { Link } from 'react-router-dom'

function NoteGroup(): React.ReactElement {
  return (
    <Layout>
      <Link to="/" className='link-item mb-15'>备注说明</Link>
    </Layout>
  )
}

export default NoteGroup