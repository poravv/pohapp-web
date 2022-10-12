import './App.css';
import NavigatorBar from './layouts/NavigatorBar';
import Footer from './layouts/Footer';

function App() {
  return (
    <div className="App">
      <div>
      <NavigatorBar />
      </div>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
