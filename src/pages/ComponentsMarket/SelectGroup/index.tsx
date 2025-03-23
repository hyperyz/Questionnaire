import Layout from '../Layout'
import { NavLink } from 'react-router-dom'
function SelectGroup(): React.ReactElement {
    return (
        <Layout>
            <NavLink to="/materials/"
                className={({ isActive }) => isActive ? "link-item mb-15 link-item-active" : "link-item mb-15"}>单选题</NavLink>
            <NavLink to="/materials/multi-select" className={({ isActive }) => isActive ? "link-item mb-15 link-item-active" : "link-item mb-15"}>多选题</NavLink>
            <NavLink to="/materials/option-select" className={({ isActive }) => isActive ? "link-item mb-15 link-item-active" : "link-item mb-15"}>下拉选择</NavLink>
            <NavLink to="/materials/single-pic-select" className={({ isActive }) => isActive ? "link-item mb-15 link-item-active" : "link-item mb-15"}>图片单选题</NavLink>
            <NavLink to="/materials/multi-pic-select" className={({ isActive }) => isActive ? "link-item mb-15 link-item-active" : "link-item mb-15"}>图片多选题</NavLink>
        </Layout>
    )
}

export default SelectGroup