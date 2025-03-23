
import ButtonGroup from "../ButtonGroup"
import { Radio } from 'antd';
import { BoldOutlined } from '@ant-design/icons';
import { updateStatus } from "@/store";
import { useDispatch } from "react-redux";
function WeightEditor({ configKey, configs }) {
    const dispatch = useDispatch()
    const statusArr = configs.status

    const handleItalicChange = (value: number) => {
        dispatch(updateStatus({ configKey, status: value }))
    }
    return (
        <ButtonGroup title={`${configKey === 'titleWeight' ? '标题' : '描述'}加粗`} status={statusArr[configs.currentStatus]}>
            <Radio.Group value={configs.currentStatus} onChange={(e) => handleItalicChange(e.target.value)} buttonStyle="solid">
                {
                    statusArr.map((item, index) => <Radio.Button value={index} key={index}>{!!index ? '正常' : <BoldOutlined />}</Radio.Button>)
                }
            </Radio.Group>
        </ButtonGroup>
    )
}

export default WeightEditor