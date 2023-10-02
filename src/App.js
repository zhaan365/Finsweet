import {Route, Routes} from 'react-router-dom'
import Layout from "./components/Layout/Layout";
import Home from "./pages/Home/Home";
import Blog from "./pages/Blog/Blog";
import Career from "./pages/Career/Career";
import Company from "./pages/Company/Company";
import Service from "./pages/Service/Service";
import NotFound from "./pages/NotFound/NotFound";
import '../src/styles/style.scss'
import Contact from "./pages/Contact/Contact";


function App() {
  return (
    <>
        <Routes>
            <Route path='/' element={<Layout/>}>
                <Route path='' element={<Home/>}/>
                <Route path='/blog' element={<Blog/>}/>
                <Route path='/career' element={<Career/>}/>
                <Route path='/company' element={<Company/>}/>
                <Route path='/service' element={<Service/>}/>
                <Route path='/contact' element={<Contact/>}/>
                <Route path='*' element={<NotFound/>}/>
            </Route>
        </Routes>
    </>
  );
}

export default App;
