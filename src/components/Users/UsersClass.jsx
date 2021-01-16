import React from "react"
import "./Users.scss"
import * as axios from "axios"
import Preloader from "../Common/Preloader/Preloader";
import { NavLink } from "react-router-dom";

class UsersClass extends React.Component {
    // constructor(props) { // конструктор класса
    //     super(props); // передача конструктора для родительского класса
    // }

    componentDidMount() { // когда компонента смонтирована
        //console.log("props: ", this.props);
        this.props.setFetchingComplete(true); // ставим загрузку страницы на true (еще грузится)

        axios.get("https://files.thechampguess.ru/samuraiJS/users.php?page="+ this.props.currentPage +"&count=" + this.props.pageSize) // загружаем данные с API в процессе конструктора класса (один раз)
        .then(response => {
            this.props.setUsers(response.data.users);
            this.props.setTotalUserCount(response.data.totalCount);
            this.props.setFetchingComplete(false); // ставим на загрузку страницы false (загрузили)
            //console.log(response.data);
        });

        //console.log("Получили данные с API")
    }

    onPaginationClick = (e) => {
        this.props.setCurrentPage(e);
        this.props.setFetchingComplete(true); // ставим загрузку страницы на true (еще грузится)

        axios.get("https://files.thechampguess.ru/samuraiJS/users.php?page="+ e +"&count=" + this.props.pageSize) // загружаем данные с API в процессе конструктора класса (один раз)
        .then(response => {
            this.props.setUsers(response.data.users);
            this.props.setTotalUserCount(response.data.totalCount);
            this.props.setFetchingComplete(false); // ставим на загрузку страницы false (загрузили)
            //console.log(response.data);
        });
    }

    render() {

        let pageCount = Math.ceil(this.props.totalUserCount / this.props.pageSize);
        let pages = [...Array(pageCount).keys()].map(e => e + 1); // массив 0 1 2 3 и так далее

        //console.log(this.props, "k")

        let myUsers = this.props.usersData.map(e => <User key={e.id} data={e} followMethod={this.props.сhangeFollow}/>)

        return (
            <UsersAPIComp isFetching={this.props.isFetching} users={myUsers} pages={pages} currentPage={this.props.currentPage} onPaginationClick={this.onPaginationClick}/>
        )
    }
}

const UsersAPIComp = (props) => {
    return (
        <div className="users">
            <h2>Users</h2>
            <div className="users-pagination">
                {props.pages.map(e => <button key={e} onClick={() => props.onPaginationClick(e)} className={props.currentPage === e ? "button_primary active" : "button_primary"}>{e}</button>)}
            </div>
            <div className="users-container">
                {props.isFetching ? <Preloader/> : props.users}
            </div>
        </div>
    )
}

const User = (props) => {

    const onChangeFollow = () => {
        props.followMethod(props.data.id)
    }

    return (
        <div className="users-container-item">
            <div className="users-container-item-data">
                <NavLink to={"profile/" + props.data.id}>
                    <img src={props.data.photo} alt="ava"/>
                </NavLink>
                <button className="button_primary" onClick={onChangeFollow}>{props.data.isFollow ? "Unfollow" : "Follow"}</button>
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