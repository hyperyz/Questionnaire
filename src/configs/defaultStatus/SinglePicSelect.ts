// 单选图片的JSON-Schema配置
import { v4 as uuidv4 } from "uuid"

export default function () {
    return {
        name: 'single-pic-select',
        id: uuidv4(),
        status: {
            title: {
                id: uuidv4(),
                status: '图片单选默认标题',
                isShow: true,
                name: 'title-editor',
            },
            desc: {
                id: uuidv4(),
                status: '图片单选默认描述',
                isShow: true,
                name: 'desc-editor',
            },
            options: {
                id: uuidv4(),
                status: [{
                    picTitle: '图片标题1',
                    picDesc: '图片描述1',
                    value: ''
                }, {
                    picTitle: '图片标题2',
                    picDesc: '图片描述2',
                    value: ''
                }],
                currentStatus: 0,
                isShow: true,
                name: 'pic-options-editor',
            },
            position: {
                id: uuidv4(),
                currentStatus: 0,
                status: ['左对齐', '居中对齐'],
                isShow: true,
                name: 'position-editor',
            },
            titleSize: {
                id: uuidv4(),
                currentStatus: 0,
                status: ['22', '20', '18'],
                isShow: true,
                name: 'size-editor',
            },
            descSize: {
                id: uuidv4(),
                currentStatus: 0,
                status: ['16', '14', '12'],
                isShow: true,
                name: 'size-editor',
            },
            titleWeight: {
                id: uuidv4(),
                currentStatus: 1,
                status: ['加粗', '正常'],
                isShow: true,
                name: 'weight-editor',
            },
            descWeight: {
                id: uuidv4(),
                currentStatus: 1,
                status: ['加粗', '正常'],
                isShow: true,
                name: 'weight-editor',
            },
            titleItalic: {
                id: uuidv4(),
                currentStatus: 1,
                status: ['斜体', '正常'],
                isShow: true,
                name: 'italic-editor',
            },
            descItalic: {
                id: uuidv4(),
                currentStatus: 1,
                status: ['斜体', '正常'],
                isShow: true,
                name: 'italic-editor',
            },
            titleColor: {
                id: uuidv4(),
                status: '#000',
                isShow: true,
                name: 'color-editor',
            },
            descColor: {
                id: uuidv4(),
                status: '#909399',
                isShow: true,
                name: 'color-editor',
            },
        },
    };
}