import { ParagraphsRender } from "./components/paragraphsRender";
import { ButtonsRender } from "./components/buttonsRender";

function App() {
  return (
    <div className="card-container">
      { ButtonsRender() }
      { ParagraphsRender() }
    </div>
  );
}

export default App;
