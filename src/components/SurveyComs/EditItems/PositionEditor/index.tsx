import ButtonGroup from "../ButtonGroup"
import { Radio } from 'antd';
import { AlignCenterOutlined, AlignLeftOutlined } from '@ant-design/icons';
import { updateStatus } from "@/store/comsSlice";
import { useDispatch } from "react-redux";
import { IEditArray } from "@/types/componentsType";
function PositionEditor({ configKey, configs }: IEditArray) {
    const dispatch = useDispatch()
    const statusArr = configs.status

    const handlePositionChange = (value: number) => {
        dispatch(updateStatus({ configKey, status: value }))
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