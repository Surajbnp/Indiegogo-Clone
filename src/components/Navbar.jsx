import React ,{ useState} from 'react'

import { NavLink } from 'react-router-dom';
import { Dropdown } from './Dropdown';
import styles from "../pages/CssFolder/Navbar.module.css";

const Navbar = () => {
  const [drop, setDrop] = useState(true);
  const [page, setPage] = useState(false);

  const handledrop = () => {
    setDrop(!drop);
    setPage(!page);
  };
 
  return (
    <div className={styles.nav1}>
      <nav className={styles.nav}>
        <div className={styles.div1}>
          <NavLink to="/" className={styles.logo}>
            INDIEGOGO
          </NavLink>
          <NavLink to="#" className={styles.navitemleft} style={{ paddingRight: "7px" }} onClick={handledrop}>
            Explore {drop ? "down" : "up" }
          </NavLink>
          <NavLink to="/about-what-we-do" className={styles.navitemleft}>
            What we do
          </NavLink>
            <div>

              
            </div>
        </div>
       
        <div className={styles.div2}>
          <NavLink to="/how-it-work" className={styles.navitemright}>
            For Entrepreneurs
          </NavLink>
          <NavLink to="/start-a-campaign" className={styles.navitemright1}>
            Start a campaign
          </NavLink>
           <NavLink to="/login" className={styles.navitemright}>
                Log in
              </NavLink>
              <NavLink to="/signup" className={styles.navitemright}>
                Sign Up
              </NavLink>
       
        </div>
      </nav>
      {page ? <Dropdown /> : null}
    </div>
  );
};
 

export default Navbar
