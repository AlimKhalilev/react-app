import React from "react"

class ProfileInfoStatus extends React.Component {
    state = {
        editMode: false,
        status: this.props.status || "NO STATUS"
    }

    clickToSpan = () => { // стрелка чтобы был this к state
        this.setState( // ассинхронный запрос
            {
                editMode: true
            }
        )
    }

    unFocusInput = () => {
        this.setState( // ассинхронный запрос
            {
                editMode: false
            }
        )
        this.props.updateStatus(this.state.status);
    }

    onStatusChange = (e) => {
        //console.log(e.currentTarget.value);
        this.setState( // ассинхронный запрос
            {
                status: e.currentTarget.value
            }
        )
    }

    componentDidUpdate(prevProps, prevState) { 
        if (prevProps.status !== this.props.status) { // если предыдущий статус строго не равен текущему (значит изменили статус)
            this.setState( // ассинхронный запрос
                {
                    status: this.props.status // закидываем в локальный state статус из BLL
                }
            )
        }
    }

    render() {

        //console.log("ProfileInfoStatus", this.props);

        return (
            <div className="profileInfo-status">
                <h3>Status:</h3>
                <div className="profileInfo-status-content">
                    {
                        this.state.editMode ? 
                        <input autoFocus={true} onChange={this.onStatusChange} onBlur={this.unFocusInput} type="text" placeholder="Введите свой статус" value={this.state.status}/> :
                        <span onDoubleClick={this.clickToSpan}>{this.state.status}</span>
                    }
                </div>
            </div>
        )
    }
}

export default ProfileInfoStatus;