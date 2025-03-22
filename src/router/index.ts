import { createBrowserRouter } from "react-router-dom";
import Materials from "../pages/Materials";
import Editor from "../pages/Editor";
import Home from "../pages/Home";
import SelectGroup from "@/pages/Materials/SelectGroup";
import InputGroup from "@/pages/Materials/InputGroup";
import NoteGroup from "@/pages/Materials/NoteGroup";
import ContactGroup from "@/pages/Materials/ContactGroup";
import AdvancedGroup from "@/pages/Materials/AdvancedGroup";
import InfoGroup from "@/pages/Materials/InfoGroup";

export default createBrowserRouter([
    {
        path: '/',
        Component: Home
    },
    {
        path: '/materials',
        Component: Materials,
        children: [
            { index: true, Component: SelectGroup },
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