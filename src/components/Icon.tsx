import "@blueprintjs/core/lib/css/blueprint.css";
// include blueprint-icons.css for icon font support
import "@blueprintjs/icons/lib/css/blueprint-icons.css";
import React from "react";
import svgs from "../SvgImporter"

let icons = new Map(Object.entries(svgs));

function Icon(props: { name: string, description: string }) {
    let {name, description} = props;
    let icon = icons.get(name);
    return (
        <div>
            <img src={icon}
                 // alt={description}
                 // title={description}
                 width="30" height="30"/>
        </div>

    );

}

export default Icon;