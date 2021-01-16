import React from "react"
import "./Users.scss"
import * as axios from "axios"
import Preloader from "../Common/Preloader/Preloader";

class UsersClass extends React.Component {
    // constructor(props) { // конструктор класса
    //     super(props); // передача конструктора для родительского класса
    // }

    componentDidMount() { // когда компонента смонтирована
        //console.log("props: ", this.props);
        this.props.setFetchingCompleteLocal(true); // ставим загрузку страницы на true (еще грузится)

        axios.get("https://files.thechampguess.ru/samuraiJS/users.php?page="+ this.props.currentPage +"&count=" + this.props.pageSize) // загружаем данные с API в процессе конструктора класса (один раз)
        .then(response => {
            this.props.setUsersLocal(response.data.users);
            this.props.setTotalUserCountLocal(response.data.totalCount);
            this.props.setFetchingCompleteLocal(false); // ставим на загрузку страницы false (загрузили)
            console.log(response.data);
        });

        //console.log("Получили данные с API")
    }

    onPaginationClick = (e) => {
        this.props.setCurrentPageLocal(e);
        this.props.setFetchingCompleteLocal(true); // ставим загрузку страницы на true (еще грузится)

        axios.get("https://files.thechampguess.ru/samuraiJS/users.php?page="+ e +"&count=" + this.props.pageSize) // загружаем данные с API в процессе конструктора класса (один раз)
        .then(response => {
            this.props.setUsersLocal(response.data.users);
            this.props.setTotalUserCountLocal(response.data.totalCount);
            this.props.setFetchingCompleteLocal(false); // ставим на загрузку страницы false (загрузили)
            //console.log(response.data);
        });
    }

    render() {

        let pageCount = Math.ceil(this.props.totalUserCount / this.props.pageSize);
        let pages = [...Array(pageCount).keys()].map(e => e + 1); // массив 0 1 2 3 и так далее

        console.log(this.props, "k")

        let myUsers = this.props.usersData.map(e => <User key={e.id} data={e} followMethod={this.props.onChangeFollow}/>)

        setTimeout(() => { 
            //this.props.setFetchingCompleteLocal();
            console.log(this.props)
        }, 3000);

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

    const onChangeFollowLocal = () => {
        props.followMethod(props.data.id)
    }

    return (
        <div className="users-container-item">
            <div className="users-container-item-data">
                <img src={props.data.photo} alt="ava"/>
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