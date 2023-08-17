import { useState } from "react";
import "./Navbar.scss";
import { RiCloseLine, RiMenu3Line } from "react-icons/ri";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  const MenuLinks = () => (
    <>
      <p>
        <a href="home">Home</a>
      </p>
      <p>
        <a href="What is GPT?">WhatisGPT</a>
      </p>
      <p>
        <a href="posibilities">Open AI</a>
      </p>
      <p>
        <a href="features">Case Studies</a>
      </p>
      <p>
        <a href="blog">Library</a>
      </p>
    </>
  );

  return (
    <div className="gpt3__navbar">
      <div className="gpt3__navbar__links">
        <div className="gpt3__navbar-links_logo">
          <img src="/assets/GPT-3.png" alt="" className="logo" />
        </div>
        <div className="gpt3__navbar__links__container">
          <MenuLinks />
        </div>
      </div>
      <div className="gpt3__navbar-sign">
        <p>Sign in</p>
        <button type="button">Sign Up</button>
      </div>

      <div className="gpt3__navbar-menu"> 
        {toggleMenu ? (
          <RiCloseLine
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <RiMenu3Line
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(true)}
          />
        )}

        {toggleMenu && <div className="gpt3__navbar-menu_container scale-up-center">
              <div className="gpt3__navbar-menu_container-links">
                <MenuLinks/>
              </div>
              <div className="gpt3__navbar-menu_container-links-sign">
                  <p>Sign In</p>
                  <button type="button">Sign Up</button>
              </div>  
          </div>}
      </div> 
    </div>
  );
};

export default Navbar;
