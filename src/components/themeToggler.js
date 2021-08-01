import React, { useContext } from 'react';

import { ThemeContext } from "../libs/context";
import Navigation from './navigation';

const ThemeToggler = () => {

    const {theme, setTheme} = useContext(ThemeContext);

    const handleThemeToggle = (e) => {
      e.preventDefault();

      setTheme(theme === 'light'? 'dark' : 'light');
    }

    return(
        <button className="themetoggler" onClick={handleThemeToggle}>
            <button role="img" aria-label="switch theme" style={{
                paddingTop:'20px',
                paddingBottom:'20px',
                paddingRight:'20px',
                paddingLeft:'20px',
                marginBottom:'10px'
                }}>
             switch to {theme === 'light'? 'red' : 'blue'}
            </button>
        </button>
    )
}

export default ThemeToggler;