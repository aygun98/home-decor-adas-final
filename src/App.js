import './App.css';
import { BrowserRouter, Routes,Route} from "react-router-dom";
import Home from './components/Home/Home';

import About from './pages/about/About';
import Products from './pages/Products/Products';
import Collections from './pages/collection/Collections';
import Sale from './pages/sale/Sale';
import Contact from './pages/contact/Contact';

import Layout from './components/layout/Layout';
import Login from './pages/login/Login';
// import { RxHalf2 } from 'react-icons/rx';





function App() {
  return (
    <>
    <BrowserRouter>
  
    <Routes>
      <Route path='/' element={<Layout/>}>
      <Route index  element={<Home/>}/>
      <Route path='about' element={<About/>}/>
      <Route path='products' element={<Products/>}/>
      <Route path='collections' element={<Collections/>}/>
      <Route path='sale' element={<Sale/>}/>
      <Route path='Contact' element={<Contact/>}/>
      </Route>
     
      <Route path='/login'>
        <Route index  element={<Login/>}/>        
       </Route>
    </Routes>

    </BrowserRouter>
   
 
     

    </>
  );
}

export default App;
