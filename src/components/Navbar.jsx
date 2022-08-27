import React ,{ useState} from 'react'

import { NavLink } from 'react-router-dom';
import { Dropdown } from './Dropdown';
import styles from "../pages/CssFolder/Navbar.module.css";
import { useSelector } from 'react-redux';
import { BsFillCaretDownFill, BsFillCaretUpFill } from 'react-icons/bs';
import { Box } from '@chakra-ui/react';

const Navbar = () => {
  const [drop, setDrop] = useState(true);
  const [page, setPage] = useState(false);
  const [t , setT] = useState(true)
  const userData = useSelector((state)=>state.authReducer) 

  //console.log("navbar", userData.userInfo.firstname)

  const handledrop = () => {
    setDrop(!drop);
    setPage(!page);
    setT(true)
  };

  const handle = ({children}) => {
    setT(!t)
    setDrop(!drop);
    setPage(!page);
  }
 
  return (
    <div className={styles.nav1}>
      <nav className={styles.nav}>
        <div className={styles.div1}>
          <NavLink to="/" className={styles.logo}>
            INDIEGOGO
          </NavLink>
          <NavLink  to="#" className={styles.navflex }  onClick={handledrop}>
            Explore {drop ? <BsFillCaretDownFill /> : <BsFillCaretUpFill /> }
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


          {
            userData.isAuth === true ? <>{userData.userInfo.firstname}</> : <><NavLink to="/login" className={styles.navitemright}>
            Log in
          </NavLink>
          <NavLink to="/signup" className={styles.navitemright}>
            Sign Up
          </NavLink>
          </>
          }
        </div>
      </nav>
      {page ? <Box onClick={handle}>{t ? <Dropdown /> : null}</Box> : null}
    </div>
  );
};
 

export default Navbar
