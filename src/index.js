import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MenPage from './Pages/MenPage';
import WomenPage from './Pages/WomenPage';
import JewelryPage from './Pages/JewelryPage';
import ContactPage from './Pages/ContactPage';



const router = createBrowserRouter([
  {
    path: "/",
    element: <App />, 
   
  },
 
  {
    path: "/men",
    element: <MenPage />, 
   
  },
  {
    path: "/women",
    element: <WomenPage />, 
   
  },
  {
    path: "/jewelry",
    element: <JewelryPage />, 
   
  },
  {
    path: "/contacts",
    element: <ContactPage />, 
   
  },
 
]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router} />
 
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
