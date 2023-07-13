import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import App from './App';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import Learning from './pages/Learning';
import News from './pages/News';
import Portfolio from './pages/Portfolio';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "/about",
    element: <AboutUs/>,
  },
  {
    path: "/contact",
    element: <ContactUs/>,
  },
  {
    path: "/learning",
    element: <Learning/>,
  },
  {
    path: "/news",
    element: <News/>,
  },
  {
    path: "/portfolio",
    element: <Portfolio/>,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

