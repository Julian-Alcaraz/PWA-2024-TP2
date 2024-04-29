import './App.css';
import Footer from './components/Footer/Footer';
import {  RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from "./pages/Home/Home";
import Details from "./pages/Details/Details";
import UrlError from "./pages/UrlError/UrlError";
import { ROUTES } from './const/routes';
const router = createBrowserRouter([
  {
    path: ROUTES.home,
    element: <Home />
  },
  {
    path: ROUTES.details+":id",
    element: <Details />
  },
  {
    path: "*",
    element: <UrlError />
  }
])

function App() {
  return (
    <div className='APP'>
      <div className='mb-10 '>
        <RouterProvider router={router} className=""/>  
      </div>
      <Footer />
    </div>
  );
}

export default App;
