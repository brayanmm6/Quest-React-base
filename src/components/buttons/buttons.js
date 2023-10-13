import { Button } from "../button/button";
import { MobileMenuButton } from "../mobile-menu-button/mobile-menu-button";
import "./buttons.css"

const showLabel = (label) => { 
    alert(label)
}

const ButtonsRender = () => {
    return (
        <nav>
            <MobileMenuButton/>

            <div className="buttons-container">
                <Button showLabel={showLabel} buttonTitle={"Mestre Yoda"} buttonLabel={"Que a Força esteja com você!"}/>
                <Button showLabel={showLabel} buttonTitle={"<DevQuest>"} buttonLabel={"Melhor curso de programação EVER xD!"}/>
                <Button showLabel={showLabel} buttonTitle={"Game Favorito"} buttonLabel={"Counter Strike"}/>
                <Button showLabel={showLabel} buttonTitle={"Linguagem de programação"} buttonLabel={"JavaScript"}/>
                <Button showLabel={showLabel} buttonTitle={"Série favorita"} buttonLabel={"Grey's Anatomy"}/>
                <Button showLabel={showLabel} />
                <Button showLabel={showLabel} />
            </div>
        </nav>
    )
}

export { ButtonsRender }