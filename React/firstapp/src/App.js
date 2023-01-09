import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import navbar from './components/navbar';
import Dogs from './pages/Dogs';
import Cats from './pages/cats';
import Sheeps from './pages/Sheeps';
import Goats from './pages/Goats';

function Example(props) {
  return <h1>{props.children}</h1>;
}
const cheese = 'gouda';
const someJSX = <h1>Hello World!</h1>;
function App() {
  return (
    <div className="App">
      {cheese}
      <Header />
      <Footer />
      <Example>Hello World!</Example>
      <Dogs />
    </div>
  );
}

export default App;
