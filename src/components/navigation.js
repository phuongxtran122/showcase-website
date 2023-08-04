import * as React from "react";
import { Outlet, NavLink } from "react-router-dom";

const Navigation = () => {
   return (
      <>
         <div className="container">
         <ul className="nav">
            <li>
               <NavLink 
                  to="/">Home
               </NavLink>
            </li>
            <li>
               <NavLink 
                  to="/his">Projects
               </NavLink>
            </li>
            <li>
               <NavLink 
                  to="/home">Contact
               </NavLink>
            </li>
         </ul>
         <Outlet/>
         </div>
      </>
   )
};
export default Navigation;