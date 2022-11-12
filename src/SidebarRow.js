import React from "react";
import "./SidebarRow.css"

function SidebarRow({selected, Icon, title}) {
    return(
        <div className={`sidebarRow ${selected && "selected"}`}>
            <h4 className="sidebarRow__title">{title}</h4>
        </div>
    )
}
export default SidebarRow