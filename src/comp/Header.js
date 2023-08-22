import React from 'react'
import {ImSpoonKnife} from 'react-icons/im'

function Header() {
    return (
        <header className='header' style={{ backgroundImage: `url(https://cdn.dribbble.com/users/2851555/screenshots/7286116/media/1511f4239677470f9b5327c7f8ab3e64.gif)` }}>
            <div className='layer'>
            <div className="container">
                <nav className='logo-wrapper'>
                    <div className='logo'>
                        <ImSpoonKnife className='brand' />
                    </div>
                </nav>
            <div className='header-text' >
                <h1>Easy Recipe Search</h1>
                <p>Hungry for inspiration? Let's find your perfect recipe!</p>
            </div>

        </div>
        </div>
      </header>
    )
}

export default Header