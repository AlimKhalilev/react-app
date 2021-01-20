import { BrowserRouter, Route } from "react-router-dom";
import "./App.scss";
import AsideContainer from "./components/Aside/AsideContainer";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import UsersContainer from "./components/Users/UsersContainer";
import HeaderContainer from "./components/Header/HeaderContainer";

function App() {
    return (
        <BrowserRouter>
            <HeaderContainer />
            <main className="main">
                <AsideContainer/>
                <div className="main-content">
                    <Route path="/profile/:userID?" render={() => <ProfileContainer/>} />
                    <Route path="/dialogs" render={() => <DialogsContainer/>} />
                    <Route path="/users" render={() => <UsersContainer/>} />
                </div>
            </main>
        </BrowserRouter>
    ); 
}

export default App;
