import ButtonGroup from "../ButtonGroup"
import { Radio } from 'antd';
import { AlignCenterOutlined, AlignLeftOutlined } from '@ant-design/icons';
import { updateStatus } from "@/store/comsSlice";
import { useDispatch } from "react-redux";
import { IEditArray } from "@/types/componentsType";
import { updateStatus as updateStatusInEditor } from "@/store/editorSlice";
import { useLocation } from "react-router-dom";

function PositionEditor({ configKey, configs }: IEditArray) {
    const dispatch = useDispatch()
    const statusArr = configs.status
    const location = useLocation()
    const handlePositionChange = (value: number) => {
        if (location.pathname.includes('editor')) {
            dispatch(updateStatusInEditor({ configKey, status: value }))
        } else {
            dispatch(updateStatus({ configKey, status: value }))
        }
    }
    return (
        <ButtonGroup title="居中设置" status={statusArr[configs.currentStatus]}>
            <Radio.Group value={configs.currentStatus} onChange={(e) => handlePositionChange(e.target.value)} buttonStyle="solid">
                {
                    statusArr.map((_, index) => <Radio.Button value={index} key={index}>{!!index ? <AlignCenterOutlined /> : <AlignLeftOutlined />}</Radio.Button>)
                }
            </Radio.Group>
        </ButtonGroup>
    )
}

export default PositionEditor