
import ButtonGroup from "../ButtonGroup"
import { Radio } from 'antd';
import { BoldOutlined } from '@ant-design/icons';
import { updateStatus } from "@/store/comsSlice";
import { useDispatch } from "react-redux";
import { IEditArray } from "@/types/componentsType";
import { updateStatus as updateStatusInEditor } from "@/store/editorSlice";
import { useLocation } from "react-router-dom";

function WeightEditor({ configKey, configs }: IEditArray) {
    const dispatch = useDispatch()
    const location = useLocation()
    const statusArr = configs.status

    const handleItalicChange = (value: number) => {
        if (location.pathname.includes('editor')) {
            dispatch(updateStatusInEditor({ configKey, currentStatus: value }))
        } else {
            dispatch(updateStatus({ configKey, status: value }))
        }
    }
    return (
        <ButtonGroup title={`${configKey === 'titleWeight' ? '标题' : '描述'}加粗`} status={statusArr[configs.currentStatus]}>
            <Radio.Group value={configs.currentStatus} onChange={(e) => handleItalicChange(e.target.value)} buttonStyle="solid">
                {
                    statusArr.map((_, index) => <Radio.Button value={index} key={index}>{!!index ? '正常' : <BoldOutlined />}</Radio.Button>)
                }
            </Radio.Group>
        </ButtonGroup>
    )
}

export default WeightEditor