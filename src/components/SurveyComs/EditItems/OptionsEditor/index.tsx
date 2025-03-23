import { Button, Input, message } from "antd"
import { PlusOutlined, MinusOutlined } from '@ant-design/icons';
import { updateStatus } from "@/store/comsSlice";
import { useDispatch } from "react-redux";
import { IEditArray } from "@/types/componentsType";
import { updateStatus as updateStatusInEditor } from "@/store/editorSlice";
import { useLocation } from "react-router-dom";

function DescEditor({ configKey, configs }: IEditArray) {
    const dispatch = useDispatch();
    const location = useLocation()
    const handleAddOption = () => {
        const len = configs.status.length;
        const arr = [...configs.status, `新增选项${len + 1}`]
        if (location.pathname.includes('editor')) {
            updateStatusInEditor({ configKey, status: arr })
        } else {
            dispatch(updateStatus({ configKey, status: arr }))

        }
    }

    const handleRemoveOption = (index: number) => {
        if (configs.status.length <= 2) {
            message.error('选项至少要有两个');
            return;
        } else {
            const arr = configs.status.filter((_: any, i: number) => i !== index)
            dispatch(updateStatus({ configKey, status: arr }))
            message.success('删除成功')
        }
    }

    const handleOptionChange = (e: any, index: number) => {
        const value = e.target.value;
        const arr = configs.status.map((item, i: number) => {
            if (i === index) {
                return value;
            } else {
                return item
            }
        })
        dispatch(updateStatus({ configKey, status: arr }))
    }
    console.log(configs);

    return (
        <>
            <div className="flex align-items-center mb-10">
                <div className="mr-10">选项</div>
                <Button icon={<PlusOutlined />} onClick={handleAddOption} shape="circle" />
            </div >
            <>
                {
                    configs.status.map((item, index: number) => {
                        return (
                            <div key={index} className="flex align-items-center mb-10">
                                <Input defaultValue={item} className="mt-5 mb-5" onChange={(e) => handleOptionChange(e, index)} />
                                <Button icon={<MinusOutlined />} onClick={() => handleRemoveOption(index)} shape="circle" color="danger" variant="solid" />
                            </div>
                        )
                    })
                }
            </>
        </>

    )
}

export default DescEditor