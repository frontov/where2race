import "@blueprintjs/core/lib/css/blueprint.css";
// include blueprint-icons.css for icon font support
import "@blueprintjs/icons/lib/css/blueprint-icons.css";
import React from "react";
import svgs from "../SvgImporter"

let icons = new Map(Object.entries(svgs));

class Icon extends React.Component<{ name: string, description: string }> {
    render() {
        let name = this.props.name;
        let description = this.props.description;
        let icon = icons.get(name);
        console.log(icons)
        return (
            <div>
                <a href={"/"+name} title={description}>
                    <img src={icon}
                         alt={description}
                         title={description} width="50" height="50"/>
                </a>
            </div>

        );

    }
}

export default Icon;