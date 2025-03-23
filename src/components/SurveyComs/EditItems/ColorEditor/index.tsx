import ButtonGroup from "../ButtonGroup"
import { ColorPicker } from 'antd';
import { updateStatus } from "@/store/comsSlice";
import { useDispatch } from "react-redux";

function ColorEditor({ configKey, configs }) {
    const dispatch = useDispatch();
    const handleColorChange = (color: any) => {
        dispatch(updateStatus({ configKey, status: color.toHexString() }));
    }
    return (
        <ButtonGroup title={`${configKey === 'titleColor' ? '标题' : '描述'}颜色`} status={configs.status}>
            <ColorPicker value={configs.status} onChange={handleColorChange} />
        </ButtonGroup>
    )
}

export default ColorEditor