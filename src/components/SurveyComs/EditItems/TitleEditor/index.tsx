import { Input } from "antd"
import { useDispatch } from "react-redux";
import { updateStatus } from "@/store/comsSlice";
function TitleEditor({ configKey, configs }: any) {
    const dispatch = useDispatch();

    const handleTitleChange = (e: any) => {
        const text = e.target.value;
        dispatch(updateStatus({ configKey, status: text }))
    }

    return (
        <div>
            <div className="mb-10">标题内容</div>
            <Input defaultValue={configs.status} onChange={handleTitleChange} />
        </div>
    )
}

export default TitleEditor