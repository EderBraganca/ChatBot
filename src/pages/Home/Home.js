import {React, Component} from 'react';
import Chat from '../../components/Chat/Chat.js';
import SideBar from '../../components/SideBar/SideBar.js';

import './Home.css';

class Home extends Component {
    render() {
        return (
            <div>
              <Chat />
              <SideBar />
            </div>
        );
      }
}

export default Home;