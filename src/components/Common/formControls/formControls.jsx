import "./formControls.scss"

export const Element = (Element) => ({input, meta, ...props}) => { // создаем компоненту где задаем настройки

    const hasError = meta.touched && meta.error; // если есть ошибка и элемент был тронут

    return (
        <div className="formControl">
            <div className={"formControl-field"}>
                <Element className={"formControl-field-elem" + (hasError ? " error" : "")} {...input} {...props}/>
            </div>

            {hasError && <span>{meta.error}</span>}
            
        </div>
    )
}