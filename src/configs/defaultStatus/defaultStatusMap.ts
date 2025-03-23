import singleSelectDefaultStatus from './SingleSelect'

export const defaultStatusMap: { [key: string]: () => any } = {
    "single-select": singleSelectDefaultStatus,
    // "multi-select": 
}