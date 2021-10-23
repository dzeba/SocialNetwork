import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import {BrowserRouter, Route} from "react-router-dom";
import Dialogs from "./components/Dialogs/Dialogs";
import Friends from "./components/Friends/Friends";


function App(props) {

    return (
        <BrowserRouter>
            <div className="App">
                <Header/>
                <Navbar/>
                <Friends state={props.state.friendPage}/>
                <div className='app_content'>
                    <Route path='/profile' render={() =>
                        <Profile state={props.state.profilePage}
                                 dispatch={props.dispatch}
                        />
                    }
                    />
                    <Route path='/dialogs' render={() =>
                        <Dialogs state={props.state.messagesPage}
                                 dispatch={props.dispatch}
                        />
                    }
                    />
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
