import React from 'react'
import ReactDOM from 'react-dom/client'
import router from './router/router';
import { RouterProvider } from 'react-router-dom';

// Styles
import "./styles/style.scss";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.Suspense>
    <RouterProvider router={router} />
  </React.Suspense>
)
