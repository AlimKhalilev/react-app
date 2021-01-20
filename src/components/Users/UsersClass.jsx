import React from "react"
import "./Users.scss"
import * as axios from "axios"
import Preloader from "../Common/Preloader/Preloader";
import { NavLink } from "react-router-dom";
import default_avatar from "../../assets/img/default_avatar.png"

class UsersClass extends React.Component {
    // constructor(props) { // конструктор класса
    //     super(props); // передача конструктора для родительского класса
    // }

    componentDidMount() { // когда компонента смонтирована
        //console.log("props: ", this.props);
        this.props.setFetchingComplete(true); // ставим загрузку страницы на true (еще грузится)

        console.log("page="+ this.props.currentPage +"&count=" + this.props.pageSize)

        axios.get("https://social-network.samuraijs.com/api/1.0/users?page="+ this.props.currentPage +"&count=" + this.props.pageSize,
        {
            withCredentials: true
        }) // загружаем данные с API в процессе конструктора класса (один раз)
        .then(response => {
            this.props.setUsers(response.data.items);
            this.props.setTotalUserCount(response.data.totalCount);
            this.props.setFetchingComplete(false); // ставим на загрузку страницы false (загрузили)
            //console.log(response.data);
        });

        
        //console.log("Получили данные с API")
    }

    onPaginationClick = (e) => {
        this.props.setCurrentPage(e);
        this.props.setFetchingComplete(true); // ставим загрузку страницы на true (еще грузится)

        axios.get("https://social-network.samuraijs.com/api/1.0/users?page=" + e + "&count=" + this.props.pageSize,
        {
            withCredentials: true
        }) // загружаем данные с API в процессе конструктора класса (один раз)
        .then(response => {
            this.props.setUsers(response.data.items);
            this.props.setTotalUserCount(response.data.totalCount);
            this.props.setFetchingComplete(false); // ставим на загрузку страницы false (загрузили)
            //console.log(response.data);
        });
    }

    render() {

        let pageCount = Math.ceil(this.props.totalUserCount / this.props.pageSize);
        let pages = [...Array(pageCount).keys()].map(e => e + 1); // массив 0 1 2 3 и так далее

        let myUsers = this.props.usersData.map(e => <User key={e.id} data={e} followMethod={this.props.changeFollow}/>)

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

    //console.log("user", props)

    const onChangeFollow = () => {

        if (!props.data.followed) { // если мы не подписаны на челика
            axios.post("https://social-network.samuraijs.com/api/1.0/follow/" + props.data.id, // подписка
                {},
                {
                    withCredentials: true,
                    headers: {
                        "API-KEY": "586b73f2-a87d-43b3-a302-62ce4f729018"
                    }
                }
            )
            .then(response => {
                if (response.data.resultCode === 0) { // если все прошло успешно
                    props.followMethod(props.data.id)
                }
            });
        }
        else {
            axios.delete("https://social-network.samuraijs.com/api/1.0/follow/" + props.data.id, // отписка
                {
                    withCredentials: true,
                    headers: {
                        "API-KEY": "586b73f2-a87d-43b3-a302-62ce4f729018"
                    }
                }
            )
            .then(response => {
                if (response.data.resultCode === 0) { // если все прошло успешно
                    props.followMethod(props.data.id)
                }
            });
        }
        
    }

    return (
        <div className="users-container-item">
            <div className="users-container-item-data">
                <NavLink to={"profile/" + props.data.id}>
                    <img src={props.data.photos.small || default_avatar} alt="ava"/>
                </NavLink>
                <button className="button_primary" onClick={onChangeFollow}>{props.data.followed ? "Unfollow" : "Follow"}</button>
            </div>
            <div className="users-container-item-info">
                <div className="users-container-item-info-about">
                    <p>{props.data.id} - {props.data.name}</p>
                    <p>{props.data.status}</p>
                </div>
                <div className="users-container-item-info-location">
                    <h4>
                        Узбекистан<br/>Ташкент
                    </h4>
                </div>
            </div>
        </div>
    )
}

export default UsersClass;