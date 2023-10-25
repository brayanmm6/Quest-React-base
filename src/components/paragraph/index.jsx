import "./index.css"
import { getAdvices } from "../../services/advices/advices"

const getAdvice = await getAdvices()

const Paragraph = ({textTitle, textToRender, randomAdvice, textColor, estateOftext}) => {
    if(randomAdvice === true){
        const adviceMessage = getAdvice.slip.advice
        return (
            <div className="paragraph-container" style={{color: textColor, textTransform: estateOftext}}>
                <p title={textTitle}>{adviceMessage}</p>
            </div>
        )
    }else{
        return (
            <div className="paragraph-container" style={{color: textColor, textTransform: estateOftext}}>
                <p title={textTitle}>{textToRender}</p>
            </div>
        )
    }
}

Paragraph.defaultProps = {
    textTitle: "Title do texto não foi definido.",
    textToRender: "Parágrafo padrão para props de Text.",
    randomAdvice: false,
    textColor: "#fff",
    estateOftext: "uppercase"
}

export { Paragraph }