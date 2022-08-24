import React from "react";
import { NavLink } from "react-router-dom";

import styles from "../pages/CssFolder/Navbar.module.css";
export const Dropdown = () => {
  return (
    <div style={{ marginBottom: "5px", borderTop: "1px solid black" }}>
      <div className={styles.drop1}>
        <div>
          <p className={styles.p21}>Explore All Project</p>
          <img
            src="https://c2.iggcdn.com/indiegogo-media-prod-cld/image/upload/c_fit,w_auto,g_center,q_auto:best,dpr_2.0,f_auto/homepage/crowdfunding-bg-desktop-sm.jpg"
            alt="blank"
            className={styles.img1}
          />
        </div>
        <div>
          <p className={styles.p21}>Our top 10 Finds</p>
          <img
            src="https://c1.iggcdn.com/indiegogo-media-prod-cld/image/upload/f_auto/v1618336553/dx7ssf5krfnevw6q8eij.jpg"
            alt="blank"
            className={styles.img2}
          />
        </div>
        <div>
          <p className={styles.p21}>Team favourite</p>
          <img
            src="https://c1.iggcdn.com/indiegogo-media-prod-cld/image/upload/f_auto/v1618332231/kf6uqtwoyhrzyuadrjjd.jpg"
            alt="blank"
            className={styles.img3}
          />
        </div>
        <div>
          <p className={styles.p21}>InDemand Stars</p>
          <img
            src="https://c1.iggcdn.com/indiegogo-media-prod-cld/image/upload/f_auto/v1610645828/srw2ffyyagzenfu6pznr.png"
            alt="blank"
            className={styles.img4}
          />
        </div>
        <div>
          <p className={styles.p21}>Join the Convo</p>
          <img
            src="https://c1.iggcdn.com/indiegogo-media-prod-cld/image/upload/f_auto/v1597692648/t5nvsqhmxvwgk8cgrtac.png"
            alt="blank"
            className={styles.img5}
          />
        </div>
      </div>
      <div className={styles.drop2}>
        <div className={styles.row1}>
          <p className={styles.row1p}>
            <NavLink to="/explorePage" className={styles.customlink1}>
              Tech And Innovation
            </NavLink>
          </p>
          <div className={styles.col11}>
            <NavLink to="/audio" className={styles.customlink}>
              Audio
            </NavLink>
            <br/><br/>
            <NavLink to="/" className={styles.customlink}>
              Camera Gear
            </NavLink>
            <br/><br/>
            <NavLink to="/" className={styles.customlink}>
              Education
            </NavLink>
            <br/><br/>
            <NavLink to="/" className={styles.customlink}>
              Energy and Tech
            </NavLink>
            <br/><br/>
            <NavLink to="/" className={styles.customlink}>
              Fashion & Wearbles
            </NavLink>
            <br/><br/>
            <NavLink to="/" className={styles.customlink}>
              Food & Beverage
            </NavLink>
            <br/><br/>
          </div>
          <div className={styles.col21}>
            <NavLink to="/" className={styles.customlink}>
              Health & Fitness
            </NavLink>
            <br/><br/>
            <NavLink to="/" className={styles.customlink}>
              Home
            </NavLink>
            <br/><br/>
            <NavLink to="/" className={styles.customlink}>
              Phones & Accessories
            </NavLink>
            <br/><br/>
            <NavLink to="/" className={styles.customlink}>
              Productivity
            </NavLink>
            <br/><br/>
            <NavLink to="/" className={styles.customlink}>
              Transportation
            </NavLink>
            <br/><br/>
            <NavLink to="/" className={styles.customlink}>
              Travel & Outdoors
            </NavLink>
            <br/><br/>
          </div>
        </div>
        <div className={styles.row2}>
          <p className={styles.row2p}>CREATIVE WORKS</p>
          <div className={styles.col12}>
            <NavLink to="/" className={styles.customlink}>
              Podcasts, Blogs & Vlogs
            </NavLink>
            <br/><br/>
            <NavLink to="/" className={styles.customlink}>
              Tabletop Games
            </NavLink>
            <br/><br/>
            <NavLink to="/" className={styles.customlink}>
              Video Games
            </NavLink>
            <br/><br/>
            <NavLink to="/" className={styles.customlink}>
              Web Series & TV Shows
            </NavLink>
            <br/><br/>
            <NavLink to="/" className={styles.customlink}>
              Writing & Publishing
            </NavLink>
            <br/><br/>
            <NavLink to="/" className={styles.customlink}>
              Photography
            </NavLink>
            <br/><br/>
          </div>
          <div className={styles.col22}>
            <NavLink to="/" className={styles.customlink}>
              Art
            </NavLink>
            <br/><br/>
            <NavLink to="/" className={styles.customlink}>
              Comics
            </NavLink>
            <br/><br/>
            <NavLink to="/" className={styles.customlink}>
              Dance & Theater
            </NavLink>
            <br/><br/>
            <NavLink to="/" className={styles.customlink}>
              Film
            </NavLink>
            <br/><br/>
            <NavLink to="/" className={styles.customlink}>
              Music
            </NavLink>
            <br/><br/>
          </div>
        </div>
        <div className={styles.row3}>
          <p className={styles.row3p}>COMMUNITY PROJECTS</p>
          <NavLink to="/" className={styles.customlink}>
            Culture
          </NavLink>
          <br/><br/>
          <NavLink to="/" className={styles.customlink}>
            Environment
          </NavLink>
          <br/><br/>
          <NavLink to="/" className={styles.customlink}>
            Human Rights
          </NavLink>
          <br/><br/>
          <NavLink to="/" className={styles.customlink}>
            Local Businessesness
          </NavLink>
          <br/><br/>
        </div>
      </div>
    </div>
  );
};