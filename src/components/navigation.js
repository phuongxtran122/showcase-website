import * as React from "react";
import {Link} from 'react-router-dom';
import ReactDOM from 'react-dom';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import His from "./hsdkjf"
import Home from "./home"

const Navigation = (
    <nav>
        <ul>
            <li>
               <Link to="/">Home</Link>
            </li>
            <li>
               <Link to="/His">Users</Link>
            </li>
            <li>
               <Link to="/Home ">Contact</Link>
            </li>
         </ul>
    </nav>
);
export default Navigation;