// 用于在redux中做状态的初始化映射
import singleSelectDefaultStatus from './SingleSelect'
import SinglePicSelectDefaultStatus from './SinglePicSelect'
import multiSelectDefaultStatus from './MultiSelect'
import multiPicSelectDefaultStatus from './MultiPicSelect'

export const defaultStatusMap: { [key: string]: () => any } = {
    "single-select": singleSelectDefaultStatus,
    "single-pic-select": SinglePicSelectDefaultStatus,
    "multi-select": multiSelectDefaultStatus,
    "multi-pic-select": multiPicSelectDefaultStatus,
}