import React from 'react'

const Header = () => {

    const year = new Date().getFullYear()
    return (<>
        <header>
            <div className="container">
                <h1>SD Notes</h1>
            </div>
        </header>
    </>)
}
export default Header