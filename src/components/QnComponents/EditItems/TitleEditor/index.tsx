import { Input } from "antd"
import { useDispatch } from "react-redux";
import { updateStatus } from "@/store/comsSlice";
import { updateStatus as updateStatusInEditor } from "@/store/editorSlice";
import { IEditText } from "@/types/componentsType";
import { useLocation } from "react-router-dom";

function TitleEditor({ configKey, configs }: IEditText) {
    const dispatch = useDispatch();
    const location = useLocation();

    const handleTitleChange = (e: any) => {
        const text = e.target.value;
        if (location.pathname.includes("editor")) {
            dispatch(updateStatusInEditor({ configKey, status: text }))
        } else {
            dispatch(updateStatus({ configKey, status: text }))
        }
    }

    return (
        <div>
            <div className="mb-10">标题内容</div>
            <Input value={configs.status} onChange={handleTitleChange} />
        </div>
    )
}

export default TitleEditor