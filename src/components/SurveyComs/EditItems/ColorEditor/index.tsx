import ButtonGroup from "../ButtonGroup"
import { ColorPicker } from 'antd';
import { updateStatus } from "@/store/comsSlice";
import { useDispatch } from "react-redux";
import { IEditText } from "@/types/componentsType";
import { updateStatus as updateStatusInEditor } from "@/store/editorSlice";
import { useLocation } from "react-router-dom";

function ColorEditor({ configKey, configs }: IEditText) {
    const dispatch = useDispatch();
    const location = useLocation();
    const handleColorChange = (color: any) => {
        if (location.pathname.includes('editor')) {
            dispatch(updateStatusInEditor({ configKey, status: color.toHexString() }));
        } else {
            dispatch(updateStatus({ configKey, status: color.toHexString() }));
        }
    }
    return (
        <ButtonGroup title={`${configKey === 'titleColor' ? '标题' : '描述'}颜色`} status={configs.status}>
            <ColorPicker value={configs.status} onChange={handleColorChange} />
        </ButtonGroup>
    )
}

export default ColorEditor