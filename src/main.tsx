import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, createBrowserRouter, createHashRouter, RouterProvider } from "react-router-dom";
import ErrorPage from './pages/error/ErrorPage';
import './index.scss'
import App from './pages/App';
import Border from './pages/border/Border';
import Home from './pages/home/Home';

const router = createHashRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: "border",
        element: <Border />
      },
      
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
