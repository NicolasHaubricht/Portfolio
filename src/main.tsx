import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import './index.css'
import App from './App.tsx'
import Error from './routes/Error/Error.tsx'
import Home from './routes/Home/Home'
import Contato from './routes/Contato/Contato.tsx'
import Projetos from './routes/Projetos/Projetos.tsx'
import Projeto from './routes/Projeto/Projeto.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/contato', element: <Contato /> },
      {
        path: '/projetos', element: <Projetos />,
        children: [
          { path: ':id', element: <Projeto /> },
        ],
      },
    ],
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
