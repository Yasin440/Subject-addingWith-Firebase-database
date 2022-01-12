import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import AddSubject from './Components/Pages/AddSubject/AddSubject';
import Home from './Components/Pages/Home/Home';
import View from './Components/Pages/View/View';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from './Components/Shared/Header/Header';

function App() {
  return (
    <BrowserRouter>
      <ToastContainer position='top-center' />
      <Header />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/addSubject" element={<AddSubject />} />
        <Route path="/editSubject/:_id" element={<AddSubject />} />
        <Route path="/view/:id" element={<View />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
