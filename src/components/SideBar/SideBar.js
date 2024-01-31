import React, {Component} from 'react';
import { lightTheme, darkTheme } from './../Theme/Theme';
import './SideBar.css';

class SideBar extends Component {  
  constructor(props) {
    super(props);
    this.state = {
      isDarkMode: true, 
    };
  }
  render() {
    const { isDarkMode } = this.state;

    const sidebarClass = `sidebar ${isDarkMode ? 'dark' : 'light'}`;

    return(
        <nav className={sidebarClass}>
        </nav>
    );
  }
}

export default SideBar;