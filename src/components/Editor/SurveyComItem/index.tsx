import { ISurveyItem } from '@/types/surveyType';
import styles from './index.module.scss'
import { useDispatch } from 'react-redux';
import { addComponent } from '@/store/editorSlice'

function SurveyComItem({ materialName, comName }: ISurveyItem) {
    const dispatch = useDispatch();
    const handleSurveyItemClick = () => {
        // if (defaultStatusMap) {
        //     console.log(111111111);

        // }
        // else {
        //     console.log(222222222);
        // }
        // console.log('wan了做不下去了', defaultStatusMap);
        console.log('点击了', comName, materialName);

        dispatch(addComponent({ materialName }));

    }
    return (
        <div className={`${styles['survey-com-item-container']} pointer flex justify-content-center align-items-center self-center pl-10 pr-10 mb-10`}
            onClick={handleSurveyItemClick}
        >
            {comName}
        </div>
    )
}

export default SurveyComItem