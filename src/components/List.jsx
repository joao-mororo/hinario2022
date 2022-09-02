import React from "react";
import './style.css'

function List(props) {


    let list = props.list
    let aStyle = {
        // color: "white",
        // fontSize: '17px',
        // textDecoration: 'none',
    }
    let ulStyle = {
        // listStyleType: 'none',
        // margin: 0,
        // padding: 0,
        // height: '551px',
        // overflow: 'auto'
    }
    let liStyle = {
        // display: 'flex',
        // justifyContent: 'left',
        // margin: '5px',
    }
    let array = []

    if (list) {
        for (let x = 0; x < list.length; x++) {
            let num = (list[x].num < 10 ? '0' : '') 
                + (list[x].num < 100 ? '0' : '') 
                + list[x].num
            let name = list[x].name
            let link = list[x].link
        
            array.push(
                <li style={liStyle} className="liList">
                    <a href={link} target="_blank" rel="noopener noreferrer" style={aStyle} className="aList">
                        <span className="spanList">{num}</span>. {name}
                    </a>
                </li>
            )
        }
    }

    return (
        <ul style={ulStyle} className="ulList">
            {array}
        </ul>
    )
}
export default List