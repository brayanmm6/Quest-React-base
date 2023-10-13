import { Paragraph } from "../paragraph/paragraph"
import "./paragraphs.css"

const ParagraphsRender = () => {
    return (
        <div className="paragraphs-container">
            <Paragraph textTitle={"Texto de abertura de Star Wars Episódio 1."} textToRender={"Episódio I A AMEAÇA FANTASMA: A República Galáctica está em grande tumulto. Em disputa estão os impostos sobre as rotas comerciais para os sistemas estelares exteriores. Na esperança de resolver o assunto com um bloqueio de implacáveis naves de guerra, a gananciosa federação de comércio interrompe todos os carregamentos para o pequeno planeta Naboo. Enquanto o Congresso da República debate incessantemente esta alarmante cadeia de acontecimentos, o Supremo Chanceler mandava secretamente dois Cavaleiros Jedi, guardiões da paz e da justiça na galáxia, para resolver o conflito..."}/>
            <Paragraph textTitle={"Texto de abertura de Star Wars Episódio 2."} textToRender={"Episódio II ATAQUE DOS CLONES: Uma inquietação toma conta do Senado Galáctico. Milhares de sistemas solares declararam suas intenções em deixar a República. Esse movimento separatista, sob a liderança do misterioso Conde Dookan, tem criado dificuldades para o limitado número de Cavaleiros Jedi manter a paz e a ordem na galáxia. Senadora Amidala, a antiga rainha de Naboo, está retornando ao Senado Galáctico para a votação da proposta crítica de criação de um Exército da República, para auxiliar os sobrecarregados Jedi...."}/>
            <Paragraph />
            <Paragraph textTitle={"Texto aleatório recebido por Advice slip JSON api."} randomAdvice={true}/>
        </div>
    )
}

export { ParagraphsRender }