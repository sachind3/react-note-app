import React, { useState } from 'react'
import Header from './Header'
import CreateNote from './CreateNote'
import Notes from './Notes'
import Footer from './Footer'

const App = () => {
    const [addItem, setAddItem] = useState([])
    const addNote = (note) => {
        setAddItem((prevData) => {
            return [...prevData, note]
        })
    }

    const onDelete = (id) => {
        setAddItem((oldData) => {
            return oldData.filter((cuurdata, indx) => {
                return indx !== id;
            });
        });

    };
    return (<>
        <Header />
        <CreateNote passNote={addNote} />
        <section className="notes__section">
            <div className="container">
                {
                    addItem.map((val, index) => {
                        return <Notes key={index} id={index} title={val.title} content={val.content} deleteItem={onDelete} />
                    })
                }
            </div>
        </section>
        <Footer />
    </>)
}
export default App