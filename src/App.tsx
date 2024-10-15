import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Home from "./pages/Home";
import Experiences from "./pages/Experiences";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },{
    path: "/experiences",
    element: <Experiences />,
  }
]);

export default function App() {
  return <RouterProvider router={router} />
}