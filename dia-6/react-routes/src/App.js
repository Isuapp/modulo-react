import './App.css';

import { Route, Routes } from 'react-router-dom';


// Containers
import Home from './containers/Home';
import About from './containers/About';
import Contact from './containers/Contact';
import Categories from './components/categories/Categories'
import Login from './components/user/Login';
import Category from './components/categories/Category';
import CategoryHome from './containers/CategoryHome';

//Componentes
import Header from './components/header/Header';
import Footer from './components/footer/Footer';



const App = ()=> {


  return (
    <div className='App'>
      <Header/>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/login' element={<Login />}/>
        <Route path='categories' element={<Categories />}>
            <Route path='' element={<CategoryHome />} />
            <Route path=':category' element={<Category />}/>
        </Route>
        <Route path='/about' element={<About/>}/>
        <Route path='contact' element={<Contact />}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
