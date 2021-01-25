import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { Field, reduxForm } from "redux-form"
import { requiredField } from "../../formsValidator/validate";
import { LoginUser, LogoutUser } from "../../redux/authReducer";
import { Element } from "../Common/formControls/formControls";
import "./Login.scss";

let Input = Element("input"); // через HOC создаем свой textarea

const Login = (props) => {
    console.log(props, "Login");

    const submitForm = (formData) => {
        console.log(formData);
        props.LoginUser(formData.email, formData.password, formData.rememberMe);
    }

    if (props.isAuth) { // если залогинились, редирект на profile
        return <Redirect to="/profile"/>
    }

    return (
        <div>
            <h1>LOGIN</h1>
            <LoginFormRedux onSubmit={submitForm}/>
        </div>
    )
}

const LoginForm = (props) => {
    return (
        <form className="loginForm" onSubmit={props.handleSubmit}>
            <label htmlFor="">
                <Field validate={[requiredField]} component={Input} name={"email"} type={"email"} placeholder={"Email"}/>
            </label>
            <label htmlFor="">
                <Field validate={[requiredField]} component={Input} name={"password"} type={"text"} placeholder={"Password"}/>
            </label>
            <label htmlFor="rememberMe">
                <Field component={"input"} name={"rememberMe"} type={"checkbox"} id={"rememberMe"}/> Remember me
            </label>
            <label htmlFor="">
                <button>Сохранить</button>
            </label>
            {props.error ?             
            <div className="loginForm-error">
                <span>{props.error}</span>
            </div> : ""
            }

        </form>
    )
}

const LoginFormRedux = reduxForm({ // инициализация формы для reduxForm
    form: "login"
})(LoginForm);

const mapDispatchToProps = {
    LoginUser,
    LogoutUser
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})

const LoginContainer = connect(mapStateToProps, mapDispatchToProps)(Login);

export default LoginContainer;