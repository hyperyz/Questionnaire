export interface IBase {
    id: string;
    isShow: boolean;
    name: string;
}

export interface IStatusText extends IBase {
    status: string;
}

export interface IStatusArray extends IBase {
    currentStatus: number;
    status: string[];
}

export interface IEditArray extends IBase {
    configKey: string;
    configs: IStatusArray
}

export interface IEditText extends IBase {
    configKey: string;
    configs: IStatusText
}

export interface IComponentHeader {
    title: IStatusText
    desc: IStatusText
    options: IStatusArray
    position: IStatusArray
    titleSize: IStatusArray
    descSize: IStatusArray
    titleWeight: IStatusArray
    descWeight: IStatusArray
    titleItalic: IStatusArray
    descItalic: IStatusArray
    titleColor: IStatusText
    descColor: IStatusText
}

export interface IButtonGroup {
    title: string,
    status: string,
    children: React.ReactNode
}