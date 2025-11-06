import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./pages/RootPage";
import HomePage from "./pages/HomePage";
import GalleryPage from "./pages/GalleryPage";
import ServicesPage from "./pages/ServicesPage";
import './style/index.scss';
import ProductsPage from "./pages/ProductsPage";




const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "gallery", element: <GalleryPage /> },
      { path: "services", element: <ServicesPage/> },
      { path: "products", element: <ProductsPage/> },
    ],
  },
]);

export default function App() {
  return (
    <RouterProvider router={router} />
  )
}
