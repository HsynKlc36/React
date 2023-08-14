
import './App.css';
import Dropdown from './component.js/Dropdown';
import Weather from './component.js/Weather';
import { CitiesProvider } from './context.js/CitiesContext';


function App() {
  return (
    <div className="App">
      <CitiesProvider>
        <Dropdown/>
        <Weather/>
      </CitiesProvider>
    </div>
  );
}

export default App;
