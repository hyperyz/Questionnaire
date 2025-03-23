
import ButtonGroup from "../ButtonGroup"
import { Radio } from 'antd';
import { BoldOutlined } from '@ant-design/icons';
import { updateStatus } from "@/store/comsSlice";
import { useDispatch } from "react-redux";
import { IEditArray } from "@/types/componentsType";
function WeightEditor({ configKey, configs }: IEditArray) {
    const dispatch = useDispatch()
    const statusArr = configs.status

    const handleItalicChange = (value: number) => {
        dispatch(updateStatus({ configKey, status: value }))
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