import React from "react"
import "./Users.scss"
import Preloader from "../Common/Preloader/Preloader";
import { NavLink } from "react-router-dom";
import default_avatar from "../../assets/img/default_avatar.png"

class UsersClass extends React.Component {
    // constructor(props) { // конструктор класса
    //     super(props); // передача конструктора для родительского класса
    // }

    componentDidMount() { // когда компонента смонтирована
        //console.log("props: ", this.props);
        //console.log("page="+ this.props.currentPage +"&count=" + this.props.pageSize)

        this.props.getUsersThunkCreator(this.props.currentPage, this.props.pageSize);
        
        //console.log("Получили данные с API")
    }

    onPaginationClick = (e) => { // приходит id страницы
        this.props.setCurrentPage(e);
        this.props.getUsersThunkCreator(e, this.props.pageSize);
    }

    render() {

        let pageCount = Math.ceil(this.props.totalUserCount / this.props.pageSize);
        let pages = [...Array(pageCount).keys()].map(e => e + 1); // массив 0 1 2 3 и так далее

        //console.log(this.props);

        let myUsers = this.props.usersData.map(e => <User key={e.id} data={e}
            followUserThunkCreator={this.props.followUserThunkCreator}
            unfollowUserThunkCreator={this.props.unfollowUserThunkCreator}
            followDisabledInfo={this.props.followDisabledInfo} />)

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

    //console.log("user: ", props)

    const onChangeFollow = () => {

        if (!props.data.followed) { // если мы не подписаны на челика
            props.followUserThunkCreator(props.data.id);
        }
        else {
            props.unfollowUserThunkCreator(props.data.id);
        }
        
    }

    // внизу где includes смотрим, если в массиве инфы есть id текущего пользователя, значит его кнопка follow будет disabled

    return (
        <div className="users-container-item">
            <div className="users-container-item-data">
                <NavLink to={"profile/" + props.data.id}>
                    <img src={props.data.photos.small || default_avatar} alt="ava"/>
                </NavLink>
                <button disabled={props.followDisabledInfo.includes(props.data.id)} className="button_primary" onClick={onChangeFollow}>{props.data.followed ? "Unfollow" : "Follow"}</button>
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