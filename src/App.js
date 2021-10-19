import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import {BrowserRouter, Route} from "react-router-dom";
import Dialogs from "./components/Dialogs/Dialogs";


function App() {
    return (
        <BrowserRouter>
        <div className="App">
            <Header/>
            <Navbar/>
            <div className='app_content'>
                <Route path ='/profile' component={Profile}/>
                <Route path ='/dialogs' component={Dialogs}/>
            </div>
        </div>
        </BrowserRouter>
    );
}

export default App;
