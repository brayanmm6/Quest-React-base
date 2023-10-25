import "./index.css"

const AlertButton = ({buttonTitle, buttonLabel, backgroundColor, textColor}) => {
    return (
        <button className="button" style={{ backgroundColor: backgroundColor, color: textColor }} onClick={ () => alert(buttonLabel)} > {buttonTitle} </button>
    )
}

AlertButton.defaultProps = {
    buttonLabel: "Este botão não possui Label definida!",
    buttonTitle: "Sem título definido!",
    backgroundColor: "rgba(222, 222, 222, 0.4)",
    textColor: "#000",
}

export { AlertButton }