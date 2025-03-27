import TitleEditor from "@/components/QnComponents/EditItems/TitleEditor"
import DescEditor from "@/components/QnComponents/EditItems/DescEditor"
import OptionsEditor from "@/components/QnComponents/EditItems/OptionsEditor"
import SizeEditor from "@/components/QnComponents/EditItems/SizeEditor"
import WeightEditor from "@/components/QnComponents/EditItems/WeightEditor"
import ColorEditor from "@/components/QnComponents/EditItems/ColorEditor"
import PositionEditor from "@/components/QnComponents/EditItems/PositionEditor"
import ItalicEditor from "@/components/QnComponents/EditItems/ItalicEditor"
import PicOptionsEditor from "@/components/QnComponents/EditItems/PicOptionsEditor"

interface INameToEditorComMap {
    [key: string]: any
}
export const nameToEditorComMap: INameToEditorComMap = {
    "title-editor": TitleEditor,
    "desc-editor": DescEditor,
    "options-editor": OptionsEditor,
    "pic-options-editor": PicOptionsEditor,
    "size-editor": SizeEditor,
    "weight-editor": WeightEditor,
    "color-editor": ColorEditor,
    "position-editor": PositionEditor,
    "italic-editor": ItalicEditor,
}