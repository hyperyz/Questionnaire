import { createBrowserRouter } from "react-router-dom";
import Materials from "../pages/ComponentsMarket";
import Editor from "../pages/Editor";
import Home from "../pages/Home";
import SelectGroup from "@/pages/ComponentsMarket/SelectGroup";
import InputGroup from "@/pages/ComponentsMarket/InputGroup";
import NoteGroup from "@/pages/ComponentsMarket/NoteGroup";
import ContactGroup from "@/pages/ComponentsMarket/ContactGroup";
import AdvancedGroup from "@/pages/ComponentsMarket/AdvancedGroup";
import InfoGroup from "@/pages/ComponentsMarket/InfoGroup";
import SingleSelect from "@/components/SurveyComs/Materials/SelectComs/SingleSelect"
import MultiSelect from "@/components/SurveyComs/Materials/SelectComs/MultiSelect"
import OptionSelect from "@/components/SurveyComs/Materials/SelectComs/OptionSelect"
import SinglePicSelect from "@/components/SurveyComs/Materials/SelectComs/SinglePicSelect";
import MultiPicSelect from "@/components/SurveyComs/Materials/SelectComs/MultiPicSelect";
export default createBrowserRouter([
    {
        path: '/',
        Component: Home
    },
    {
        path: '/materials',
        Component: Materials,
        children: [
            {
                path: '',
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
        Component: Editor
    }
])