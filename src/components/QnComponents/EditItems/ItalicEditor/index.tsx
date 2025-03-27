import ButtonGroup from "../ButtonGroup"
import { Radio } from 'antd';
import { ItalicOutlined } from '@ant-design/icons';
import { updateStatus } from "@/store/comsSlice";
import { useDispatch } from "react-redux";
import { IEditArray } from "@/types/componentsType";
import { updateStatus as updateStatusInEditor } from "@/store/editorSlice";
import { useLocation } from "react-router-dom";
function ItalicEditor({ configKey, configs }: IEditArray) {
    const dispatch = useDispatch()
    const statusArr = configs.status
    const location = useLocation()
    const handleItalicChange = (value: number) => {
        if (location.pathname.includes("editor")) {
            dispatch(updateStatusInEditor({ configKey, status: value }))
        } else {
            dispatch(updateStatus({ configKey, status: value }))
        }
    }
    return (
        <ButtonGroup title={`${configKey === 'titleItalic' ? '标题' : '描述'}倾斜`} status={statusArr[configs.currentStatus]}>
            <Radio.Group value={configs.currentStatus} onChange={(e) => handleItalicChange(e.target.value)} buttonStyle="solid">
                {
                    statusArr.map((_, index) => <Radio.Button value={index} key={index}>{!!index ? '正常' : <ItalicOutlined />}</Radio.Button>)
                }
            </Radio.Group>
        </ButtonGroup>
    )
}

export default ItalicEditor