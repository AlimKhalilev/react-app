import React from "react"
import ava from "../Profile/MyPosts/Post/ava.jpg"
import "./Users.scss"
import * as axios from "axios"

class UsersClass extends React.Component {
    // constructor(props) { // конструктор класса
    //     super(props); // передача конструктора для родительского класса
    // }

    componentDidMount() { // когда компонента смонтирована
        console.log("props: ", this.props);

        axios.get("https://files.thechampguess.ru/samuraiJS/users.php?page="+ this.props.currentPage +"&count=" + this.props.pageSize) // загружаем данные с API в процессе конструктора класса (один раз)
        .then(response => {
            this.props.setUsersLocal(response.data.users);
            this.props.setTotalUserCountLocal(response.data.totalCount);
            console.log(response.data);
        });

        console.log("Получили данные с API")
    }

    onPaginationClick = (e) => {
        this.props.setCurrentPageLocal(e);
        console.log(e);

        axios.get("https://files.thechampguess.ru/samuraiJS/users.php?page="+ e +"&count=" + this.props.pageSize) // загружаем данные с API в процессе конструктора класса (один раз)
        .then(response => {
            this.props.setUsersLocal(response.data.users);
            this.props.setTotalUserCountLocal(response.data.totalCount);
            console.log(response.data);
        });
    }

    render() {

        let pageCount = Math.ceil(this.props.totalUserCount / this.props.pageSize);
        let pages = [...Array(pageCount).keys()].map(e => e + 1); // массив 0 1 2 3 и так далее

        let myUsers = this.props.usersData.map(e => <User key={e.id} data={e} followMethod={this.props.onChangeFollow}/>)

        return (
            <div className="users">
                <h2>Users</h2>
                <div className="users-pagination">
                    {pages.map(e => <button key={e} onClick={() => this.onPaginationClick(e)} className={this.props.currentPage === e ? "button_primary active" : "button_primary"}>{e}</button>)}
                </div>
                <div className="users-container">
                    {myUsers}
                </div>
            </div>
        )
    }
}

const User = (props) => {

    const onChangeFollowLocal = () => {
        props.followMethod(props.data.id)
    }

    return (
        <div className="users-container-item">
            <div className="users-container-item-data">
                <img src={ava} alt="ava"/>
                <button className="button_primary" onClick={onChangeFollowLocal}>{props.data.isFollow ? "Unfollow" : "Follow"}</button>
            </div>
            <div className="users-container-item-info">
                <div className="users-container-item-info-about">
                    <p>{props.data.id} - {props.data.name}</p>
                    <p>{props.data.status}</p>
                </div>
                <div className="users-container-item-info-location">
                    <h4>
                        {props.data.location.country}<br/>{props.data.location.city}
                    </h4>
                </div>
            </div>
        </div>
    )
}

export default UsersClass;