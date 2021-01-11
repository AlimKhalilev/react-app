import { BrowserRouter, Route } from "react-router-dom";
import "./App.scss";
import AsideContainer from "./components/Aside/AsideContainer";
import Dialogs from "./components/Dialogs/Dialogs";
import Header from "./components/Header/Header";
import ProfileContainer from "./components/Profile/ProfileContainer";

function App(props) {

    return (
        <BrowserRouter>
            <Header />
            <main className="main">
                <AsideContainer/>
                <div className="main-content">
                    <Route path="/profile" render={() => <ProfileContainer/>} />
                    <Route path="/dialogs" render={() => <Dialogs data={props.state.dialogsPage} dispatch={props.dispatch}/>} />
                </div>
            </main>
        </BrowserRouter>
    ); 
}

export default App;
