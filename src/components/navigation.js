import React from 'react';

import ThemeToggler from './themeToggler'

const Navigation = () => {
    return(
        <nav className="nav">
            <div>
                <span>Home</span>
                
            </div>
            <div>
               <ThemeToggler/>
            </div>
        </nav>
    )
}

export default Navigation;