import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './App.css';
import { RouterProvider } from 'react-router-dom';
import { createBrowserRouter } from 'react-router-dom';
import Sidebar from './Pages/Sidebar';

import App from './App';
import CallForPapers from './Pages/NavbarPages/CallForPapers';
import { Speaker } from 'lucide-react';
import ImportantLinks from './Pages/NavbarPages/ImportantLinks';
import Registration from './Pages/NavbarPages/Registration';
import AboutConference from './Pages/NavbarPages/AboutConference';
import ContactUs from './Pages/NavbarPages/ContactUs';
import Committees from './Pages/NavbarPages/Committees';
import Proceedings from './Pages/NavbarPages/Proceedings';
import Home from './Pages/NavbarPages/Home';
import Speakers from './Pages/NavbarPages/Speakers';
import ImportantDates from './Pages/NavbarPages/ImportantDates';
import Failed from './Pages/StatusPages/Failed'
import Success from './Pages/StatusPages/Success'



const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element : <Sidebar />,
      },
      {
        path: '/callforpapers',
        element : <CallForPapers />,
      }
      ,
      {
        path: '/speakers',
        element : <Speakers />,
      }
      ,
      {
        path: '/importantdates',
        element : <ImportantDates />,
      }
      ,
      {
        path: '/registration',
        element : <Registration />,
      },
      {
        path: '/registration/success',
        element: <Success/>
      },
      {
        path: '/registration/failed',
        element: <Success/>
      }
      ,
      {
        path: '/proceedings',
        element : <Proceedings />,
      }
      ,
      {
        path: '/Committees',
        element : <Committees />,
      }
      ,
      {
        path: '/importantlinks',
        element : <ImportantLinks />,
      }
      ,
      {
        path: '/contactus',
        element : <ContactUs />,
      }
      ,
      {
        path: '/aboutconference',
        element : <AboutConference />,
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
