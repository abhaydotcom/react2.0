import Store from './store/store.js'
import { Provider } from 'react-redux'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RouterProvider,createBrowserRouter } from 'react-router-dom'
import {AuthLayout,Login} from './component/index.js'   
import Home from './pages/Home.jsx'
 import Signup from './pages/Signup.jsx'
 import AllPosts from './pages/AllPost.jsx'
 import AddPost from './pages/AddPost.jsx'
 import EditPost from './pages/editPost.jsx'
 import Post from './pages/Post.jsx'

const router= createBrowserRouter([
    {
        path: '/',
        element: <App/>,
        children:[
            {
                path:"/",
                element:<Home/>

            },
            {
                path:'/login',
                element:(
                    <AuthLayout authenticaton={false} >
                        <Login  />
                    </AuthLayout>
                )
            },
            {
                path: "/signup",
                element: (
                    <AuthLayout authentication={false}>
                        <Signup />
                    </AuthLayout>
                ),
            },
            {
                path: "/all-posts",
                element: (
                    <AuthLayout authentication>
                        {" "}
                        <AllPosts />
                    </AuthLayout>
                ),
            },
            {
                path: "/add-post",
                element: (
                    <AuthLayout authentication>
                        {" "}
                        <AddPost />
                    </AuthLayout>
                ),
            },
            {
                path: "/edit-post/:slug",
                element: (
                    <AuthLayout authentication>
                        {" "}
                        <EditPost />
                    </AuthLayout>
                ),
            },
            {
                path: "/post/:slug",
                element: <Post />,
            },
        ],
    },
])

createRoot(document.getElementById('root')).render(
 <Provider store={Store}>
    <RouterProvider router={router} />
    </Provider>
)
