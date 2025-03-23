import ButtonGroup from "../ButtonGroup"
import { Radio } from 'antd';
import { useDispatch } from "react-redux";
import { updateStatus } from "@/store/comsSlice";
import { updateStatus as updateStatusInEditor } from "@/store/editorSlice";
import { IEditArray } from "@/types/componentsType";
import { useLocation } from "react-router-dom";

function SizeEditor({ configKey, configs }: IEditArray) {

    const dispatch = useDispatch()
    const location = useLocation()
    const statusArr = configs.status
    const handleSizeChange = (value: number) => {
        if (location.pathname.includes('editor')) {
            dispatch(updateStatusInEditor({ configKey, status: value }))
        } else {
            dispatch(updateStatus({ configKey, status: value }))
        }
    }

    return (
        <ButtonGroup title={`${configKey === 'titleSize' ? '标题' : '描述'}尺寸`} status={statusArr[configs.currentStatus]}>
            <Radio.Group value={configs.currentStatus} onChange={(e) => handleSizeChange(e.target.value)} buttonStyle="solid">
                <Radio.Button value={0}>{'大'}</Radio.Button>
                <Radio.Button value={1}>{'中'}</Radio.Button>
                <Radio.Button value={2}>{'小'}</Radio.Button>
            </Radio.Group>
        </ButtonGroup>
    )
}

export default SizeEditor