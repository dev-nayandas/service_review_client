import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import AddService from "../../Pages/AddService/AddService";
import Blogs from "../../Pages/Blogs/Blogs";
import Home from "../../Pages/Home/Home/Home";
import Service from "../../Pages/Home/Service/Service";
import ServiceContainer from "../../Pages/Home/ServiceContainer/ServiceContainer";
import Services from "../../Pages/Home/Services/Services";
import Login from "../../Pages/Login/Login";
import MyReviews from "../../Pages/MyReviews/MyReviews";
import SignUp from "../../Pages/SignUp/SignUp";
import ServiceDetails from "../../ServideDetails/ServiceDetails";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
    { 
      path: '/',
      element: <Main></Main>,
      children: [
        {
            path: '/',
            
            element: <Home></Home>
        },
        {
            path: '/home',
         
            element: <Home></Home>
        },
        {
            path: '/login',
            element: <Login></Login>
        },
        {
            path: '/signup',
            element: <SignUp></SignUp>
        },
        {
            path: '/myreviews',
            
            element: <PrivateRoute><MyReviews></MyReviews></PrivateRoute>
            
        },
        {
            path: '/addService',
            element:<PrivateRoute><AddService></AddService></PrivateRoute>
             
        },
        {
            path: '/blogs',
            element: <Blogs></Blogs>
        },
        {
            path: '/service',
        
            element: <Service></Service>
        },
        {
            path: '/services',
           
            element: <Services></Services>
        },
        {
            path: '/service/:id',
            loader: async ({params})=>{
                console.log(params.id)
                return fetch (`http://localhost:5000/services/${params.id}`)
            },
            element: <ServiceDetails></ServiceDetails>
        },
        {
            path: '/serviceContainer',
           
            element: <ServiceContainer></ServiceContainer>
        },
      ],
    }

  ])

export default router;