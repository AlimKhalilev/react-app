import { BrowserRouter, Route } from "react-router-dom";
import "./App.scss";
import Aside from "./components/Aside/Aside";
import Dialogs from "./components/Dialogs/Dialogs";
import Header from "./components/Header/Header";
import Profile from "./components/Profile/Profile";

function App(props) {

    return (
        <BrowserRouter>
            <Header />
            <main className="main">
                <Aside data={props.state.aside}/>
                <div className="main-content">
                    <Route path="/profile" render={() => <Profile data={props.state.profilePage} dispatch={props.dispatch}/>} />
                    <Route path="/dialogs" render={() => <Dialogs data={props.state.dialogsPage} dispatch={props.dispatch}/>} />
                </div>
            </main>
        </BrowserRouter>
    );
}

export default App;
