import React from "react";
import { ReactDOM } from "react";

function List(props) {
    let arr = props.List

    return (
        <div>
            <p>{arr}</p>
        </div>
    )
}
export default List