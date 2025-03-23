import styles from './index.module.scss'
import { defaultStatusMap } from '@/configs/defaultStatus/defaultStatusMap'
function SurveyComItem({ item }: any) {
    return (
        <div>
            <div className={`${styles['survey-com-item-container']} pointer flex justify-content-center align-items-center self-center pl-10 pr-10 mb-10`}
                onClick={() => {
                    console.log(item.materialName);

                    // const newSurveyCom = defaultStatusMap[item.materialName]()
                    // console.log(newSurveyCom);

                }}
            >
                {item.comName}
            </div>
        </div>
    )
}

export default SurveyComItem