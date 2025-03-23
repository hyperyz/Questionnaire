import ButtonGroup from "../ButtonGroup"
import { Radio } from 'antd';
import { ItalicOutlined } from '@ant-design/icons';
import { updateStatus } from "@/store/comsSlice";
import { useDispatch } from "react-redux";

function ItalicEditor({ configKey, configs }) {
    const dispatch = useDispatch()
    const statusArr = configs.status

    const handleItalicChange = (value) => {
        dispatch(updateStatus({ configKey, status: value }))
    }
    return (
        <ButtonGroup title={`${configKey === 'titleItalic' ? '标题' : '描述'}倾斜`} status={statusArr[configs.currentStatus]}>
            <Radio.Group value={configs.currentStatus} onChange={(e) => handleItalicChange(e.target.value)} buttonStyle="solid">
                {
                    statusArr.map((item, index) => <Radio.Button value={index} key={index}>{!!index ? '正常' : <ItalicOutlined />}</Radio.Button>)
                }
            </Radio.Group>
        </ButtonGroup>
    )
}

export default ItalicEditor