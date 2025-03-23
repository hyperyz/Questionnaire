import styles from './index.module.scss'
import SurveyComItem from '../SurveyComItem'
import { ISurveyComs } from '@/types/surveyType'

function SurveyComGroup({ title, list }: ISurveyComs) {
    return (
        <div className={styles['survey-com-group-container']}>
            <div className="mb-20">
                <div className={`${styles['group-title']} font-weight-500 mb-15 flex align-items-center`}>
                    <div className={styles.title}>{title}</div>
                </div>

                <div className='flex wrap space-between'>
                    {list.map((item, index) => (
                        <div key={index} className={styles['survey-com-item']}>
                            <SurveyComItem materialName={item.materialName} comName={item.comName} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default SurveyComGroup