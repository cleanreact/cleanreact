import React from 'react'

const index = (props) => {
    return (
        <div>
            <header>The Header</header>
                <div>{ props.children}</div>
            <footer>The Footer</footer>
        </div>
    )
}

export default index
