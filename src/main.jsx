import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Home from './component/Home/Home.jsx'
import About from './component/About/About.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Contact from './component/Contact/Contact.jsx'
import User from './component/User/User.jsx'
import Github, { GithubInfoLoader } from './component/GIthub/Github.jsx'

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App/>,
//     children: [
//       {
//         path: "",
//         element: <Home />
//       },
//       {
//         path: "about",
//         element: <About />
//       },
//       {
//         path:"contact",
//         element:<Contact />
//       }
//     ]
//   }
// ])

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />} >
      <Route path='' element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='contact' element={<Contact />} />
      <Route
       loader={GithubInfoLoader}
       path='github' 
       element={<Github />} />
      <Route path='user/:userId' element={<User />} />
    </Route>
  )
)
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
