import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';

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
    </div>
  );
}

export default App;
