import React from 'react'

const Footer = () => {

    const year = new Date().getFullYear()
    return (<>
        <footer>
            <div className="container">
                Copyright &copy; {year}
            </div>
        </footer>
    </>)
}
export default Footer