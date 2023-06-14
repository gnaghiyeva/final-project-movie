import AdminLogin from "../pages/Admin/AdminLogin";
import AdminRoot from "../pages/Admin/AdminRoot";
import Dashboard from "../pages/Admin/Dashboard/Dashboard";
import AddFilm from "../pages/Admin/Films/AddFilm";
import AdminFilms from "../pages/Admin/Films/AdminFilms";
import EditFilm from "../pages/Admin/Films/EditFilm";
import AddService from "../pages/Admin/Services/AddService";
import AdminServices from "../pages/Admin/Services/AdminServices";
import EditService from "../pages/Admin/Services/EditService";
import AddSlider from "../pages/Admin/Slider/AddSlider";
import AdminSliders from "../pages/Admin/Slider/AdminSliders";
import EditSlider from "../pages/Admin/Slider/EditSlider";
import Home from "../pages/Main/Home/Home";
import MainRoot from "../pages/Main/MainRoot";

export const ROUTES = [
    {
        path:'/',
        element:<MainRoot/>,
        children:[
            {
                path:'',
                element:<Home/>
            },
            

        ]
    },
    {
        path:'/admin',
        element:<AdminRoot/>,
        children:[
            {
                path:'',
                element:<Dashboard/>
            },
            {
                path:'login',
                element:<AdminLogin/>
            },
            {
                path:'sliders',
                element:<AdminSliders/>
            },
            {
                path:'add-slider',
                element:<AddSlider/>
            },
            {
                path:'slider/edit/:id',
                element:<EditSlider/>
            },
            {
                path:'films',
                element:<AdminFilms/>
            },
            {
                path:'add-film',
                element:<AddFilm/>
            },
            {
                path:'film/edit/:id',
                element:<EditFilm/>
            },
            {
                path:'services',
                element:<AdminServices/>
            },
            {
                path:'add-service',
                element:<AddService/>
            },
            {
                path:'service/edit/:id',
                element:<EditService/>
            },



        ]
    }
]