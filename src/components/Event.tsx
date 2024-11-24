import {Card} from "@blueprintjs/core";
import "@blueprintjs/core/lib/css/blueprint.css";
// include blueprint-icons.css for icon font support
import "@blueprintjs/icons/lib/css/blueprint-icons.css";
import React from "react";
import Icon from "./Icon";


function Event(props: { event: any }) {

    return (
        <Card interactive={true} className="card">
            <div className="icon">
                <Icon name={props.event.kind} description={props.event.kind_rus}/>
            </div>
            <div className="flex-container">

                <div className="left child">
                    <a href={props.event.link} target="_blank">{props.event.name}</a>

                </div>

                <div className="right child">
                    <span className="date">{props.event.date}</span><br/>

                    <span>{props.event.address}</span>
                    <br/><b></b> {props.event.kind_rus} <b></b>
                </div>
            </div>
        </Card>


    );

}

export default Event;