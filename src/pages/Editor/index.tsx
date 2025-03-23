import Header from '@/components/Common/Header'
import styles from './index.module.scss'
import LeftSide from './LeftSide'
import RightSide from './RightSide'
import Center from './Center'

function Editor(): React.ReactElement {
    return (
        <div>
            <div className={styles.header}>
                <Header />
            </div>
            <div className={styles.container}>
                <LeftSide />
                <RightSide />
            </div>
            <div>
                <Center />
            </div>
        </div>
    )
}

export default Editor