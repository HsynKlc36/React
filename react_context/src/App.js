
import './App.css';
import Container from './components/Container';
import {ThemeProvider} from './context/ThemeContext';
import { UserProvider } from './context/UserContext';


function App() {
  return (
    <div className="App">
     
     <ThemeProvider >
      <UserProvider>
              <Container/>
      </UserProvider>
     </ThemeProvider>
    </div>
  );
}

export default App;
//bu şekilde verdiğim value değerlerine themeContext.Provider altındaki componentlere ulaşabiliyor olmamız gerekir!
//burada şu unutulmamalıdır ki, import ettiğimiz herhangi bir componentin içerisine yazılanlar yani buradaki button gibi, bunlar ThemeProvider'ın children'i olacaktır!

//burada görüldüğü üzere context içerisinde context vardır yani multi context yapısına sahip olabilir.Böylece <UserProvider> artık <ThemeProvider > içerisindeki datayı da kullanabilir hale gelmiş oldu!

//burada  container componentleri her iki provider'ın sağladığı dataya da ulaşabilir!