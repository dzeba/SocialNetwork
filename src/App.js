import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import {BrowserRouter, Route} from "react-router-dom";
import Friends from "./components/Friends/Friends";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";


function App(props) {

    return (
        <BrowserRouter>
            <div className="App">
                <Header/>
                <Navbar/>
                {/*<Friends state={props.state.friendPage}/>*/}
                <div className='app_content'>
                    <Route path='/profile' render={() =>
                        <Profile/>
                    }/>
                    <Route path='/dialogs' render={() =>
                        <DialogsContainer/>
                    }/>
                    <Route path='/users' render={() =>
                        <UsersContainer />
                    }/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
