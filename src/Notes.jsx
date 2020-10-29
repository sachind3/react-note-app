import React from 'react'
const Notes = (props) => {

    const deleteEvent = () => {
        props.deleteItem(props.id)
    }
    return (<>
        <div className="note">
            <h1>{props.title}</h1>
            <p>{props.content}</p>
            <button type="button" onClick={deleteEvent}>Delete</button>
        </div>
    </>)
}
export default Notes