import "./button.css"

const Button = ({buttonTitle, buttonLabel, backgroundColor, textColor, showLabel}) => {
    return (
        <button className="button" style={{ backgroundColor: backgroundColor, color: textColor }} onClick={() => showLabel(buttonLabel)}> {buttonTitle} </button>
    )
}

Button.defaultProps = {
    buttonLabel: "Este botão não possui Label definida!",
    buttonTitle: "Sem título definido!",
    backgroundColor: "rgba(222, 222, 222, 0.4)",
    textColor: "#000",
}

export { Button }