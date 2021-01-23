import { Field, reduxForm } from "redux-form"
import "./Login.scss"

const Login = () => {
    const submitForm = (formData) => {
        console.log(formData);
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
                <Field component={"input"} name={"login"} type={"text"} placeholder={"Login"}/>
            </label>
            <label htmlFor="">
                <Field component={"input"} name={"password"} type={"text"} placeholder={"Password"}/>
            </label>
            <label htmlFor="rememberMe">
                <Field component={"input"} name={"rememberMe"} type={"checkbox"} id={"rememberMe"}/> Remember me
            </label>
            <label htmlFor="">
                <button>Сохранить</button>
            </label>
        </form>
    )
}

const LoginFormRedux = reduxForm({ // инициализация формы для reduxForm
    form: "login"
})(LoginForm)

export default Login;