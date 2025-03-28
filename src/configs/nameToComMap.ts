import SingleSelect from "@/components/QnComponents/Components/SelectComs/SingleSelect"
import SinglePicSelect from '@/components/QnComponents/Components/SelectComs/SinglePicSelect'
import MultiSelect from "@/components/QnComponents/Components/SelectComs/MultiSelect"
import MultiPicSelect from "@/components/QnComponents/Components/SelectComs/MultiPicSelect"

interface INameToComMap {
    [key: string]: any
}

export const nameToComMap: INameToComMap = {
    "single-select": SingleSelect,
    "single-pic-select": SinglePicSelect,
    "multi-select": MultiSelect,
    "multi-pic-select": MultiPicSelect,
}