  
import React,{useContext} from 'react';

import { ThemeContext } from "../libs/context";

const Header = () => {
    const {theme} = useContext(ThemeContext);
    return(
        <header className="header">
            <span>{theme}</span>
        </header>
    )
}

export default Header;