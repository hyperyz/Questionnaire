import { createBrowserRouter } from "react-router-dom";
import Market from "../pages/Market";
import Editor from "../pages/Editor";
import Home from "../pages/Home";
import SelectGroup from "@/pages/Market/SelectGroup";
import InputGroup from "@/pages/Market/InputGroup";
import NoteGroup from "@/pages/Market/NoteGroup";
import ContactGroup from "@/pages/Market/ContactGroup";
import AdvancedGroup from "@/pages/Market/AdvancedGroup";
import InfoGroup from "@/pages/Market/InfoGroup";
import SingleSelect from "@/components/QnComponents/Components/SelectComs/SingleSelect"
import MultiSelect from "@/components/QnComponents/Components/SelectComs/MultiSelect"
import OptionSelect from "@/components/QnComponents/Components/SelectComs/OptionSelect"
import SinglePicSelect from "@/components/QnComponents/Components/SelectComs/SinglePicSelect";
import MultiPicSelect from "@/components/QnComponents/Components/SelectComs/MultiPicSelect";
import Outline from "@/pages/Editor/LeftSide/Outline";
import SurveyType from "@/pages/Editor/LeftSide/SurveyType";
export default createBrowserRouter([
    {
        path: '/',
        Component: Home
    },
    {
        path: '/components',
        Component: Market,
        children: [
            {
                path: 'select-group',
                Component: SelectGroup,
                children: [
                    { path: 'single-select', Component: SingleSelect },
                    { path: 'multi-select', Component: MultiSelect },
                    { path: 'option-select', Component: OptionSelect },
                    { path: 'single-pic-select', Component: SinglePicSelect },
                    { path: 'multi-pic-select', Component: MultiPicSelect }
                ]
            },
            { path: 'input-group', Component: InputGroup },
            { path: 'note-group', Component: NoteGroup },
            { path: 'contact-group', Component: ContactGroup },
            { path: 'advanced-group', Component: AdvancedGroup },
            { path: 'info-group', Component: InfoGroup }
        ]
    },
    {
        path: '/editor',
        Component: Editor,
        children: [
            {
                path: '',
                Component: SurveyType
            },
            {
                path: 'outline',
                Component: Outline
            }
        ]
    }
])