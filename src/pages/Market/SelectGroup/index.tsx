import Layout from '../MarketLayout'
import { NavLink } from 'react-router-dom'
function SelectGroup(): React.ReactElement {
    return (
        <Layout>
            <NavLink to="/components/select-group/single-select" end className={({ isActive }) => isActive ? "link-item mb-15 link-item-active" : "link-item mb-15"}>单选题</NavLink>
            <NavLink to="/components/select-group/multi-select" className={({ isActive }) => isActive ? "link-item mb-15 link-item-active" : "link-item mb-15"}>多选题</NavLink>
            <NavLink to="/components/select-group/single-pic-select" className={({ isActive }) => isActive ? "link-item mb-15 link-item-active" : "link-item mb-15"}>图片单选题</NavLink>
            <NavLink to="/components/select-group/multi-pic-select" className={({ isActive }) => isActive ? "link-item mb-15 link-item-active" : "link-item mb-15"}>图片多选题</NavLink>
            <NavLink to="/components/select-group/option-select" className={({ isActive }) => isActive ? "link-item mb-15 link-item-active" : "link-item mb-15"}>下拉选择</NavLink>
        </Layout>
    )
}

export default SelectGroup