
import './App.css';
import { Navbar,Hero,Main } from './components/index';
import data from './data';

function App() {

const {products} = data;

  return (
    <div className="App">
       <Navbar />
      <header className="App-header">
     
        <Hero />
       
      </header>
     
      <Main products={products} />
     
    </div>
  );
}

export default App;
