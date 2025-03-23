import { Input } from "antd"
import { useDispatch } from "react-redux";
import { updateStatus } from "@/store/comsSlice";
import { IEditText } from "@/types/componentsType";
const { TextArea } = Input;
function DescEditor({ configKey, configs }: IEditText) {
    const dispatch = useDispatch();

    const handleDescChange = (e: any) => {
        const text = e.target.value;
        dispatch(updateStatus({ configKey, status: text }))
    }
    return (
        <div>
            <div className="mb-10">描述内容</div>
            <TextArea defaultValue={configs.status} onChange={handleDescChange} style={{ height: 120 }} />
        </div>
    )
}

export default DescEditor