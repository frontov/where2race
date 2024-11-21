import {Card, Elevation} from "@blueprintjs/core";
import "@blueprintjs/core/lib/css/blueprint.css";
// include blueprint-icons.css for icon font support
import "@blueprintjs/icons/lib/css/blueprint-icons.css";
import React from "react";
import Icon from "./Icon";


class Event extends React.Component<{ event: any }> {
    render() {

        return (
            <Card interactive={true} elevation={Elevation.TWO}>

                <td>
                    <Icon name={this.props.event.kind} description={this.props.event.kind_rus}/>
                </td>
                <td className="">
                    <a href={this.props.event.link} target="_blank">{this.props.event.name}</a>

                </td>
                <td className="">

                </td>
                <td className="">
                    <span className="date">{this.props.event.date}</span><br/>

                    <span>{this.props.event.address}</span>
                    <br/><b></b> {this.props.event.kind_rus} <b></b>
                </td>

            </Card>


        );

    }
}

export default Event;