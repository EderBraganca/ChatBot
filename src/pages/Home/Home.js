import {React, Component} from 'react';
import Chat from '../../components/Chat/Chat.jsx';
import SideBar from '../../components/SideBar/SideBar.jsx';
import Header from '../../components/Header/Header.jsx';
import './Home.css';

class Home extends Component {
    render() {
        return (
            <div>
              <Header />
              <Chat />
              <SideBar />
            </div>
        );
      }
}

export default Home;