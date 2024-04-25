import './App.css';
import Footer from './components/Footer/Footer';
import {  RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from "./pages/Home/Home";
import Details from "./pages/Details/Details";
import { ROUTES } from './const/routes';
const router = createBrowserRouter([
  {
    path: ROUTES.home,
    element: <Home />
  },
  {
    path: ROUTES.details+":id",
    element: <Details />
  }
])

function App() {
  return (
    <div className='APP'>
      <RouterProvider router={router}/>
      <Footer />
    </div>
  );
}

export default App;
