import React, { useState } from 'react'

const CreateNote = (props) => {


    const [note, setNote] = useState({
        title: '',
        content: ''
    })
    const [expand, setExpand] = useState(false)

    const InputEvent = (e) => {

        const { value, name } = e.target

        setNote((prevData) => {
            return {
                ...prevData,
                [name]: value
            }
        })
    }

    const addEvent = () => {
        props.passNote(note)
        setNote({
            title: '',
            content: ''
        })
    }
    const openNote = () => {
        setExpand(true)
    }
    document.body.addEventListener("dblclick", () => {
        setExpand(false)
    })
    return (<>
        <section className="createNote__section">
            <div className="container">
                <div className="main__note">
                    <form>
                        {
                            expand ?
                                (<input type="text" name="title" value={note.title} onChange={InputEvent} placeholder="Title here" />) : null
                        }
                        <textarea id="" rows="5" name="content" value={note.content} onChange={InputEvent} onClick={openNote} placeholder="Enter note here"></textarea>
                        {
                            expand ?
                                (<button type="button" onClick={addEvent}>Add a note</button>) : null
                        }
                    </form>
                </div>
            </div>
        </section>
    </>)
}
export default CreateNote