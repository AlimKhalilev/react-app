import { useEffect, useState } from "react"

const ProfileInfoStatusHooks = (props) => {

    //let stateWithUseState = useState(false);
    //let editMode = stateWithUseState[0]; // значение
    //let setEditMode = stateWithUseState[1]; // функция изменения значения

    let [editMode, setEditMode] = useState(false);
    let [status, setStatus] = useState(props.status);

    useEffect(() => { // тип componentDidUpdate, а тут в массиве условие изменения
        setStatus(props.status)
    }, [props.status]); // массив - список зависимостей, от чего он должен будет вызываться (хук)

    const clickToSpan = () => { // стрелка чтобы был this к state
        setEditMode(true);
    }

    const unFocusInput = () => {
        setEditMode(false)
        //props.updateStatus(status); // отправка на серв статус
    }

    const onStatusChange = (e) => {
        //console.log(e.currentTarget.value);
        setStatus(e.currentTarget.value);
    }

    return (
        <div className="profileInfo-status">
            <h3>Status:</h3>
            <div className="profileInfo-status-content">
                {
                    editMode ? 
                    <input autoFocus={true} onChange={onStatusChange} onBlur={unFocusInput} type="text" placeholder="Введите свой статус" value={status}/> :
                    <span onDoubleClick={clickToSpan}>{status}</span>
                }
            </div>
        </div>
    )

}

export default ProfileInfoStatusHooks;