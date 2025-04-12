import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import '../styles/index.scss'
import RootPage from './pages/Root'
import ProductsPage from './pages/Products'
import SettingsPage from './pages/Settings'



const router = createBrowserRouter([
  {
    path: '/',
    element: <RootPage/>,
    children: [
      {
        index: true,
        element: <ProductsPage/>
      },
      {
        path: 'settings',
        element: <SettingsPage/>
      }
    ]
  }
])  



function App() {
  

  return (
    <RouterProvider router={router}></RouterProvider>
  )
}

export default App
