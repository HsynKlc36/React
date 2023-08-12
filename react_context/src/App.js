
import './App.css';
import Button from './components/Button';
import Header from './components/Header';
import {ThemeProvider} from './context/ThemeContext';

function App() {
  return (
    <div className="App">
     <ThemeProvider >
      <Header/>
      <hr/>
      <Button/>
     </ThemeProvider>
    </div>
  );
}

export default App;
//bu şekilde verdiğim value değerlerine themeContext.Provider altındaki componentlere ulaşabiliyor olmamız gerekir!
//burada şu unutulmamalıdır ki, import ettiğimiz herhangi bir componentin içerisine yazılanlar yani buradaki button gibi, bunlar ThemeProvider'ın children'i olacaktır!