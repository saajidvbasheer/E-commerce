import SidebarItem from "./sidebar-item";
const items = ["Home", "Products", "Categories", "About us"]
const Sidebar = () => {
    return (
        <div className="sidebar">
            {
                items.map((item, i) => {
                    return (<SidebarItem label={item} isHome={i === 0}/>)
                })
            }
        </div>
    )
}

export default Sidebar;