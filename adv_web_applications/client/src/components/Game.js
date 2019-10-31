// IMPORTS
import React from 'react'

//COMPONENT
function Game(props){
    const [isEditing, setIsEditing]

console.log(props)
// --//
const handleClick = e => {
e.preventDefault()
//--//
    console.log(props.game.id)
    //--//
        props.updateVideoGame(props.game.id)
}
const handleDelete = e => {
e.preventDefault()
console.log(props.game.id)
// -- //
    props.deleteGame(props.game.id)
}

    return (
        <>
            <div>{props.game.title}</div>
            {props.game.rating && 
                <div>{props.game.rating}</div>
            }
            <div>{props.game.id}</div>
            <button
                onClick={handleClick}
            >Edit Button</button>
            <button
                onClick={handleDelete}
            >DELETE ME</button>
        </>
    )
}   

//EXPORTS
export default Game