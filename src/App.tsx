import { createBrowserRouter, RouterProvider } from "react-router-dom"
import "./index.css"
import Home from "./pages/Home"
import Experiences from "./pages/Experiences"
import Project from "./pages/Project"
import Contact from "./pages/Contact"
import Projects from "./pages/Projects"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/projects",
    element: <Projects />,
  },
  {
    path: "/experiences",
    element: <Experiences />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/project/:id",
    element: <Project />,
  },
])

export default function App() {
  return <RouterProvider router={router} />
}
