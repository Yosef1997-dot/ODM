import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage'
import FormPage from './pages/FormPage'
import {
  Routes,
  Route,
} from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/edit' element={<FormPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
