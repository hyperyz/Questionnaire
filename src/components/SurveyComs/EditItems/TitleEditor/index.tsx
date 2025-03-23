import { Input } from "antd"
import { useDispatch } from "react-redux";
import { updateTextStatus } from "@/store";
function TitleEditor({ configKey, configs }: any) {
    const dispatch = useDispatch();

    const handleTitleChange = (e: any) => {
        const text = e.target.value;
        dispatch(updateTextStatus({configKey, text}))
    }

    return (
        <div>
            <div className="mb-10">标题内容</div>
            <Input defaultValue={configs.status} onChange={handleTitleChange} />
        </div>
    )
}

export default TitleEditor