import { BrowserRouter, Route } from "react-router-dom";
import "./App.scss";
import AsideContainer from "./components/Aside/AsideContainer";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import UsersContainer from "./components/Users/UsersContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import { connect } from "react-redux";
import React from "react";
import { initializeApp } from "./redux/appReducer";
import Preloader from "./components/Common/Preloader/Preloader";

class App extends React.Component {

    componentDidMount() {
        this.props.initializeApp();
        console.log(this.props, "PROPS");
    }

    render() {
        console.log("рендерим", this.props.isInitialize);
        if (!this.props.isInitialize) {
            return <Preloader/>
        }
        else {
            return (
                <BrowserRouter>
                    <HeaderContainer />
                    <main className="main">
                        <AsideContainer/>
                        <div className="main-content">
                            <Route path="/profile/:userID?" render={() => <ProfileContainer/>} />
                            <Route path="/dialogs" render={() => <DialogsContainer/>} />
                            <Route path="/users" render={() => <UsersContainer/>} />
                            <Route path="/login" render={() => <Login/>} />
                            
                        </div>
                    </main>
                </BrowserRouter>
            ); 
        }
    }
}

const mapStateToProps = (state) => ({
    isInitialize: state.app.isInitialize
})

export default connect(mapStateToProps, {initializeApp})(App);;
