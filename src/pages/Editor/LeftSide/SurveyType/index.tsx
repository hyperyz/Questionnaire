import styles from './index.module.scss'
import SurveyComGroup from '@/components/Editor/SurveyComGroup'
import { SurveyComsList } from '@/configs/SurveyGroupConfig'
function SurveyType() {
    return (
        <div className={styles['survey-type-container']}>
            {
                SurveyComsList.map(coms => (
                    <SurveyComGroup key={coms.title} title={coms.title} list={coms.list} icon={coms.icon}/>
                ))
            }
        </div>
    )
}

export default SurveyType