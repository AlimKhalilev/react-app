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
                <Aside />
                <div className="main-content">
                    <Route path="/profile" render={() => <Profile postData={props.postData}/>} />
                    <Route path="/dialogs" render={() => <Dialogs dialogMessages={props.dialogMessages} dialogPersons={props.dialogPersons}/>} />
                </div>
            </main>
        </BrowserRouter>
    );
}

export default App;
