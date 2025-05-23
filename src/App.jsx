import './App.css'
import Header from './components/Header';
import Aside from './components/Aside';
import Main from './components/Main';
import Footer from './components/Footer';
import Linked from './components/Linked';

function App() {
  return (
    <div className='App'>
      <Header />
      <div className="wrap">
        <Aside />
        <Main />
      </div>
      <Footer />
      <Linked />
    </div>
  )
}

export default App
