import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./pages/RootPage";
import HomePage from "./pages/HomePage";
import GalleryPage from "./pages/GalleryPage";
import ServicesPage from "./pages/ServicesPage";
import './style/index.scss';




const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "gallery", element: <GalleryPage /> },
      { path: "services", element: <ServicesPage/> },
    ],
  },
]);

export default function App() {
  return (
    <RouterProvider router={router} />
  )
}
