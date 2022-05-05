import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import Content from './components/Content/Content';
import ItemListContainer from './components/Item/ItemListContainer';


function App() {
  return (
    <div className="App">
      
      <Navbar />
      <Content />
      <ItemListContainer/>
      <Footer />

    </div>
  );
}

export default App;
