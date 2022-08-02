import React from "react";

function List(props) {
    let list = props.list
    let aStyle = {
        color: "white"
    }
    let array = []

    if (list) {
        for (let x = 0; x < list.length; x++) {
            let num = list[x].num
            let name = list[x].name
            let link = list[x].link
        
            array.push(<li><a href={link} target="_blank" rel="noopener noreferrer">{num} - {name}</a></li>)
        }
    }

    return (
        <ul>
            {array}
        </ul>
    )
}
export default List