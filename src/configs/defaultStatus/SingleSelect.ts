// 单选的JSON-Schema配置
import SingleSelect from "@/components/SurveyComs/Materials/SelectComs/SingleSelect"
import { v4 as uuidv4 } from "uuid"
import TitleEditor from "@/components/SurveyComs/EditItems/TitleEditor"
import DescEditor from "@/components/SurveyComs/EditItems/DescEditor"
import OptionsEditor from "@/components/SurveyComs/EditItems/OptionsEditor"
import SizeEditor from "@/components/SurveyComs/EditItems/SizeEditor"
import WeightEditor from "@/components/SurveyComs/EditItems/WeightEditor"
import ColorEditor from "@/components/SurveyComs/EditItems/ColorEditor"
import PositionEditor from "@/components/SurveyComs/EditItems/PositionEditor"
import ItalicEditor from "@/components/SurveyComs/EditItems/ItalicEditor"

export default function () {
    return {
        type: SingleSelect,
        name: 'single-select',
        id: uuidv4(),
        // 组件的状态：组件的每一个能够修改的状态都应该对应一个编辑组件
        status: {
            title: {
                id: uuidv4(),
                status: '单选题默认标题',
                isShow: true,
                name: 'title-editor',
                editCom: TitleEditor,
            },
            desc: {
                id: uuidv4(),
                status: '单选题默认描述',
                isShow: true,
                name: 'desc-editor',
                editCom: DescEditor,
            },
            options: {
                id: uuidv4(),
                status: ['默认选项1', '默认选项2'],
                currentStatus: 0,
                isShow: true,
                name: 'options-editor',
                editCom: OptionsEditor,
            },
            position: {
                id: uuidv4(),
                currentStatus: 0,
                status: ['左对齐', '居中对齐'],
                isShow: true,
                name: 'position-editor',
                editCom: PositionEditor,
            },
            titleSize: {
                id: uuidv4(),
                currentStatus: 0,
                status: ['22', '20', '18'],
                isShow: true,
                name: 'size-editor',
                editCom: SizeEditor,
            },
            descSize: {
                id: uuidv4(),
                currentStatus: 0,
                status: ['16', '14', '12'],
                isShow: true,
                name: 'size-editor',
                editCom: SizeEditor,
            },
            titleWeight: {
                id: uuidv4(),
                currentStatus: 1,
                status: ['加粗', '正常'],
                isShow: true,
                name: 'weight-editor',
                editCom: WeightEditor,
            },
            descWeight: {
                id: uuidv4(),
                currentStatus: 1,
                status: ['加粗', '正常'],
                isShow: true,
                name: 'weight-editor',
                editCom: WeightEditor,
            },
            titleItalic: {
                id: uuidv4(),
                currentStatus: 1,
                status: ['斜体', '正常'],
                isShow: true,
                name: 'italic-editor',
                editCom: ItalicEditor,
            },
            descItalic: {
                id: uuidv4(),
                currentStatus: 1,
                status: ['斜体', '正常'],
                isShow: true,
                name: 'italic-editor',
                editCom: ItalicEditor,
            },
            titleColor: {
                id: uuidv4(),
                status: '#000',
                isShow: true,
                name: 'color-editor',
                editCom: ColorEditor,
            },
            descColor: {
                id: uuidv4(),
                status: '#909399',
                isShow: true,
                name: 'color-editor',
                editCom: ColorEditor,
            },
        },
    };
}