import styles from './index.module.scss'
import SurveyComItem from '../SurveyComItem'
function SurveyComGroup({ title, icon: IconComponent, list }: any) {
    return (
        <div className={styles['survey-com-group-container']}>
            <div className="mb-20">
                <div className={`${styles['group-title']} font-weight-500 mb-15 flex align-items-center`}>
                    <IconComponent />
                    <div className={styles.title}>{title}</div>
                </div>

                <div className='flex wrap space-between'>
                    {list.map((item: any, index: number) => (
                        <SurveyComItem key={index} className={styles['survey-com-item']} item={item} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default SurveyComGroup