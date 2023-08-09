import * as React from "react";
import Box from '@mui/material/Box';
import reflection from '../assets/img/reflection.gif'

const Masthead = () => {
    return <>
      <div className="viewport-top">
        <header className="site-head">
          <div className="container">
            <div className="site-banner">
              <img src={reflection} alt="loading..." />
            </div>
          </div>
        </header>
      </div>
    
    </>
}
export default Masthead;