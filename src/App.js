import './css/App.css';
import { ParagraphsRender } from "./components/paragraphs/paragraphs";
import { ButtonsRender } from './components/buttons/buttons';

function App() {
  return (
    <div className="card-container">
      { ButtonsRender() }
      { ParagraphsRender() }
    </div>
  );
}

export default App;
