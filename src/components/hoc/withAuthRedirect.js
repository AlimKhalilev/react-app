import React from "react"
import { connect } from "react-redux";
import { Redirect } from "react-router-dom"

let mapStateToPropsRedirect = (state) => ({ // ({}) это тип return {}
    isAuth: state.auth.isAuth
});

export const withAuthRedirect = (Component) => {
    class RedirectComponent extends React.Component {
        render() {
            if (this.props.isAuth) {
                return <Component {...this.props}/>
            }
            else {
                return <Redirect to="/login"/>
            }
        }
    }

    let connectedRedirectComponent = connect(mapStateToPropsRedirect)(RedirectComponent);
    return connectedRedirectComponent;
}