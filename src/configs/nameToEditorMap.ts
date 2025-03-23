import TitleEditor from "@/components/SurveyComs/EditItems/TitleEditor"
import DescEditor from "@/components/SurveyComs/EditItems/DescEditor"
import OptionsEditor from "@/components/SurveyComs/EditItems/OptionsEditor"
import SizeEditor from "@/components/SurveyComs/EditItems/SizeEditor"
import WeightEditor from "@/components/SurveyComs/EditItems/WeightEditor"
import ColorEditor from "@/components/SurveyComs/EditItems/ColorEditor"
import PositionEditor from "@/components/SurveyComs/EditItems/PositionEditor"
import ItalicEditor from "@/components/SurveyComs/EditItems/ItalicEditor"

export const nameToEditorComMap = {
    "title-editor": TitleEditor,
    "desc-editor": DescEditor,
    "options-editor": OptionsEditor,
    "size-editor": SizeEditor,
    "weight-editor": WeightEditor,
    "color-editor": ColorEditor,
    "position-editor": PositionEditor,
    "italic-editor": ItalicEditor,
}