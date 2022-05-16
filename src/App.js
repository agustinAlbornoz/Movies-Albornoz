import Rutas from './components/Routes/Rutas';
import './App.css';
import GlobalProvider from './components/GlobalContext/GlobalContext'






function App() {
  return (
      <>  
      <GlobalProvider>
      <Rutas/>
      </GlobalProvider>
      </>
  
  );
}

export default App;
