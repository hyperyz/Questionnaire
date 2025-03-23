import { Input } from "antd"
import { useDispatch } from "react-redux";
import { updateStatus } from "@/store/comsSlice";
import { IEditText } from "@/types/componentsType";
import { updateStatus as updateStatusInEditor } from "@/store/editorSlice";
import { useLocation } from "react-router-dom";
const { TextArea } = Input;
function DescEditor({ configKey, configs }: IEditText) {
    const dispatch = useDispatch();
    const location = useLocation();
    const handleDescChange = (e: any) => {
        const text = e.target.value;
        if (location.pathname.includes("editor")) {
            dispatch(updateStatusInEditor({ configKey, status: text }))
        } else {
            dispatch(updateStatus({ configKey, status: text }))
        }
    }
    return (
        <div>
            <div className="mb-10">描述内容</div>
            <TextArea defaultValue={configs.status} onChange={handleDescChange} style={{ height: 120 }} />
        </div>
    )
}

export default DescEditor