
import './App.css'
import Home from './pages/Home'
import Login from './pages/login'
import Signup from './pages/signup'
import Dashboard from './pages/dashboard'
import { createBrowserRouter , RouterProvider } from 'react-router-dom';

function App() {
  const Router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/signup",
      element: <Signup />,
    },
    {
      path: "/dashboard",
      element: <Dashboard />,
    },

  ]);
  return (
    
    <RouterProvider router={Router} />
  )
}

export default App
