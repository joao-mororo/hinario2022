import React from "react";
import './Card.css'
import hinos from "../data/hinos";
import List from "./List";

function Card() {
    const [list, setList] = React.useState();


    function compareTexts(text1, text2) {
        text1 = text1.toLowerCase()
        text2 = text2.toLowerCase()
        text1 = text1.normalize('NFD').replace(/[\u0300-\u036f]/g, "");
        text2 = text2.normalize('NFD').replace(/[\u0300-\u036f]/g, "");

        if(text1.includes(text2) && text2 !== '') {
            return true
        } else {
            return false
        }
    }

    function handleChange(event) {
        if (event.target.name === 'search') {
            let arr = []
            for (let x=0; x<hinos.length; x++) {
                // let hino = `[${hinos[x].num}] - ${hinos[x].name}`
                if (hinos[x].num.toString() === event.target.value) {
                    arr.push(hinos[x])
                }
                if (compareTexts(hinos[x].name, event.target.value)) {
                    arr.push(hinos[x])
                }
            }
            console.log(arr)
            setList(arr)
        }
        
    }
    
    return (
        <div className="hinario">
            <div className="Card" />
            <div className="list">
                <input type="text" onChange={handleChange} name="search"/>
                <List list={list} />
            </div>
        </div>
    )
}
export default Card