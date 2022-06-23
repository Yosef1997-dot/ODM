import Header from './components/Header';
import Main from './components/Main';
import Form from './components/Form'
import Footer from './components/Footer';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/edit' element={<Form/>}/>
      
      </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
