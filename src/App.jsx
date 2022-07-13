import Topbar from './components/topbar/Topbar';
import Intro from './components/intro/Intro';
import Detail from './components/detail/Detail';
import ListStudent from './components/student/ListStudent';
import ListBookInfo from './components/book/ListBookInfo'
import "./app.scss";
import { useState } from 'react';
import Menu from './components/menu/Menu';
function App() {
   
  const [menuOpen,setMenuOpen] = useState(false)
  return (
    <div className="app">
          <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
          <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
          <div className="sections">
    
    
               <Intro/>
               <Detail/>
               <ListStudent/>
               <ListBookInfo/>
               </div>
              

    
              
      
    </div>
  );
}

export default App;
