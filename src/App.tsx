import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom'
import './index.css'
import Home from './pages/Home'
import Experiences from './pages/Experiences'
import Project from './pages/Project'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/experiences',
    element: <Experiences />,
  },
  {
    path: '/project/:id',
    element: <Project />,
  }
])

export default function App() {
  return <RouterProvider router={router} />
}