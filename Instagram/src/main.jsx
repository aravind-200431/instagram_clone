import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {createBrowserRouter, Route, RouterProvider} from 'react-router-dom'
import Viewstory from './Components/viewstory.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />
  },
  {
    path: '/story/:id/:tot',
    element: <Viewstory/>
  }
]);

createRoot(document.getElementById('root')).render(
  
    <RouterProvider router={router} />
 
)
