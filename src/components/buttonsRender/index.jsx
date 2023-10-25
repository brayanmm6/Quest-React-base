import { MobileMenuButton } from "../mobile-menu-button";
import { AlertButton } from "../alert-button";
import "./index.css"

const ButtonsRender = () => {
    return (
        <nav>
            <MobileMenuButton/>

            <div className="buttons-container">
                <AlertButton buttonTitle={"Mestre Yoda"} buttonLabel={"Que a Força esteja com você!"}/>
                <AlertButton buttonTitle={"<DevQuest>"} buttonLabel={"Melhor curso de programação EVER xD!"}/>
                <AlertButton buttonTitle={"Game Favorito"} buttonLabel={"Counter Strike"}/>
                <AlertButton buttonTitle={"Linguagem de programação"} buttonLabel={"JavaScript"}/>
                <AlertButton buttonTitle={"Série favorita"} buttonLabel={"Grey's Anatomy"}/>
                <AlertButton />
                <AlertButton />
            </div>
        </nav>
    )
}

export { ButtonsRender }